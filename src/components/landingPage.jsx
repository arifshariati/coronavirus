import React, { Component } from 'react';
import Axios from 'axios';
import { Map, CircleMarker,TileLayer} from 'react-leaflet';
import {Container,Row,Col, Card, Alert} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { BarChart, Bar, XAxis,YAxis, CartesianGrid,Tooltip,Legend} from 'recharts';
import "leaflet/dist/leaflet.css";

const colors = {
    confirmed: '#FFD31D',
    recovered: '#21BF72',
    deaths: '#DD2C00',
  };
class LandingPage extends Component{
    state={
        confirmed:0,
        recovered:0,
        deaths:0,
        total:0,
        incidents:[],
        incidentsSorted:[],
        confirmedSorted:[],
        recoveredSorted:[],
        deathsSorted:[],
        zoom:2,
        minZoom:2,
        width:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      }
    
      componentDidMount(){
        this.getData();
        window.addEventListener('resize',this.updateDimensions);
      }
      updateDimensions = ()=>{
        const width = 
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

        this.setState({width});
    }
      async getData(){
      const res=await Axios.get("https://covid19.mathdro.id/api/confirmed");
      const totalDeaths=await Axios.get("https://covid19.mathdro.id/api");
      
      const filteredData=res.data.filter(row=> row.lat !== null)
      
      const sortfilteredData=res.data.filter(row=>row.countryRegion !== "US")
    
      const incidentsSorted=sortfilteredData.sort(function(a,b){
        return b.confirmed - a.confirmed;
    });
      const confirmedSorted=sortfilteredData.sort(function(a,b){
        return b.confirmed - a.confirmed;
    });

    const recoveredSorted=sortfilteredData.sort(function(a,b){
        return b.recovered - a.recovered;
    });

    const deathsSorted=sortfilteredData.sort(function(a,b){
        return b.deaths - a.deaths;
    });

      this.setState({
        incidents:filteredData,
        incidentsSorted:incidentsSorted.slice(1,10),
        confirmedSorted:confirmedSorted.slice(1,10),
        recoveredSorted:recoveredSorted.slice(1,10),
        deathsSorted:deathsSorted.slice(1,10),
        total:totalDeaths.data.deaths.value,
        confirmed:totalDeaths.data.confirmed.value,
        recovered:totalDeaths.data.recovered.value,
        deaths:totalDeaths.data.deaths.value
      })
      }
    render(){
        const {
            confirmed,
            recovered,
            deaths,
            total,
            incidents,
            confirmedSorted,
            recoveredSorted,
            deathsSorted,
            zoom,
            minZoom,
            width
        } = this.state;
        return(
            <div className="mid">
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col xs="12" lg="8">
                        <Card className="shadow" style={{marginBottom:'1rem',padding:'1rem',border:'none'}}>
                            <Map
                                width={ width > 980 ? 960 : width - 80 }
                                zoom={width < 980 ? 1 : zoom}
                                center={[20.505,-0.09]}
                                minZoom={width < 980 ? 1 : minZoom}
                                >
                                <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                                
                                {
                                incidents.map((city,i) => {
                                    return (
                                    <CircleMarker 
                                        key={i} 
                                        center={[city.lat, city.long]} 
                                        readius={20 * Math.log(city.deaths / total)}
                                        fillOpacity={0.5}
                                        fillColor={"red"}
                                        stroke={false}
                                    />
                                    )
                                })
                                }
                            </Map>
                        </Card>     
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col xs lg="8">
                        <Card className="shadow-sm" style={{marginBottom:'0rem',padding:'1rem',border:'none'}}>
                            <Row className="justify-content-md-center">
                                <Col>
                                    <Alert className="shadow" style={{backgroundColor:colors.confirmed}}>
                                    <h4>
                                    <NumberFormat 
                                        value={confirmed} 
                                        displayType={'text'} 
                                        thousandSeparator={true} 
                                    />  
                                    </h4>  
                                    <p><b>Accomulative</b><i> as of today</i></p> 
                                    </Alert>
                                </Col>
                                <Col>
                                    <Alert className="shadow" style={{backgroundColor:colors.recovered}}>
                                    <h4>
                                    <NumberFormat 
                                        value={recovered} 
                                        displayType={'text'} 
                                        thousandSeparator={true} 
                                    />
                                    </h4>
                                    <h6><b>{Math.round((recovered / confirmed) * 100)}</b><i>% Recovery</i></h6>  
                                    </Alert>
                                </Col>
                                <Col>
                                    <Alert className="shadow" style={{backgroundColor:colors.deaths,color:'#FFFFFF'}}>
                                    <h4>
                                    <NumberFormat 
                                        value={deaths} 
                                        displayType={'text'} 
                                        thousandSeparator={true} 
                                    />
                                    </h4>
                                    <h6><b>{Math.round((deaths / confirmed) * 100)}</b><i>% Deaths</i></h6>   
                                    </Alert>
                                </Col>
                            </Row>
                        </Card>     
                        </Col>
                    </Row>
                </Container>

                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col xs lg="8">
                        <Card className="shadow-sm" style={{marginBottom:'1rem',padding:'1rem',border:'none'}}>
                            <div style={{marginTop:'1rem'}}>
                                <h5 style={{textAlign:'center'}}>Top 10 Counties - Confirmed Cases Data</h5>
                            </div>
                        <BarChart 
                            width={ width > 980 ? 1200 : width - 80 } 
                            height={400} 
                            data={confirmedSorted}
                            margin={{top: 5, right: 30, left: 20, bottom: 5}}
                            layout="vertical"
                            barSize={15}
                        >
                        <CartesianGrid strokeDasharray="1 1"/>
                        <XAxis  type="number"/>
                        <YAxis dataKey="countryRegion" type="category" />
                        <Tooltip/>
                        <Legend  />
                        <Bar dataKey="confirmed" fill={colors.confirmed} />
                        </BarChart>
                        </Card>     
                        </Col>
                    </Row>
                </Container>

                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col xs lg="8">
                        <Card className="shadow-sm" style={{marginBottom:'1rem',padding:'1rem',border:'none'}}>
                            <div style={{marginTop:'1rem'}}>
                                <h5 style={{textAlign:'center'}}>Top 10 Countries - Recovered Cases Data</h5>
                            </div>
                        <BarChart 
                            width={ width > 980 ? 1200 : width - 80 }  
                            height={400} 
                            data={recoveredSorted}
                            margin={{top: 5, right: 30, left: 20, bottom: 5}}
                            layout="vertical"
                            barSize={15}
                        >
                        <CartesianGrid strokeDasharray="1 1"/>
                        <XAxis type="number"/>
                        <YAxis dataKey="countryRegion" type="category"/>
                        <Tooltip/>
                        <Legend />
                        <Bar dataKey="recovered" fill={colors.recovered} />
                        </BarChart>
                        </Card>     
                        </Col>
                    </Row>
                </Container>

                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col xs lg="8">
                        <Card className="shadow-sm" style={{marginBottom:'1rem',padding:'1rem',border:'none'}}>
                            <div style={{marginTop:'1rem'}}>
                                <h5 style={{textAlign:'center'}}>Top 10 Countries - Death Cases Data</h5>
                            </div>
                        <BarChart 
                            width={ width > 980 ? 1200 : width - 80 }  
                            height={400} 
                            data={deathsSorted}
                            margin={{top: 5, right: 30, left: 20, bottom: 5}}
                            layout="vertical"
                            barSize={15}
                        >
                        <CartesianGrid strokeDasharray="1 1"/>
                        <XAxis type="number"/>
                        <YAxis dataKey="countryRegion" type="category"/>
                        <Tooltip/>
                        <Legend />
                        <Bar dataKey="deaths" fill={colors.deaths} width={1} />
                        </BarChart>
                        </Card>     
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default LandingPage;