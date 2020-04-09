import React, { Component } from 'react';
import Axios from 'axios';
import { Map, CircleMarker,TileLayer} from 'react-leaflet';
import {Container,Row,Col, Card, Alert} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { BarChart, Bar, XAxis,YAxis, CartesianGrid,Tooltip,Legend} from 'recharts';
import "leaflet/dist/leaflet.css";
import Loader from 'react-loader-spinner';

const colors = {
    confirmed: '#FFD31D',
    recovered: '#21BF72',
    deaths: '#DD2C00',
  };
class LandingPage extends Component{
    state={
        mapData:[],
        confirmed:0,
        recovered:0,
        deaths:0,
        top10Confirmed:[],
        top10Recovered:[],
        top10Deaths:[],
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
        
      const DataForMapRes=await Axios.get("https://covid19.mathdro.id/api/deaths");
      const DataForMapAccurate=DataForMapRes.data.filter(row=> row.lat !== null);

      const DataForCasesRes=await Axios.get("https://api.covid19api.com/summary");
      
      const confirmed = DataForCasesRes.data.Global.TotalConfirmed;
      const recovered = DataForCasesRes.data.Global.TotalRecovered;
      const deaths = DataForCasesRes.data.Global.TotalDeaths;

      const confirmedSorted=DataForCasesRes.data.Countries.sort(function(a,b){
          return b.TotalConfirmed - a.TotalConfirmed;
      });
      const top10Confirmed = confirmedSorted.slice(0,10);

      const recoveredSorted=DataForCasesRes.data.Countries.sort(function(a,b){
          return b.TotalRecovered - a.TotalRecovered;
      });
      const top10Recovered = recoveredSorted.slice(0,10);
      
      const deathsSorted=DataForCasesRes.data.Countries.sort(function(a,b){
          return b.TotalDeaths - a.TotalDeaths;
      });
      const top10Deaths = deathsSorted.slice(0,10);
      this.setState({
          mapData:DataForMapAccurate,
          confirmed,
          recovered,
          deaths,
          top10Confirmed,
          top10Recovered,
          top10Deaths
      })
      }
    render(){
        const {
            mapData,
            confirmed,
            recovered,
            deaths,
            top10Confirmed,
            top10Recovered,
            top10Deaths,
            zoom,
            minZoom,
            width
        } = this.state;

        if(!confirmed) return (
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col xs="12" lg="8">
                        <Card 
                            className="shadow" 
                            style={{marginBottom:'1rem',paddingTop:'2rem',border:'none',minHeight:"700px"}}
                        >
                            <Loader 
                                type="Rings"
                                color="#DD2C00"
                                height={200}
                                width={200}
                                timeout={90000}
                            />
                        </Card>     
                        </Col>
                    </Row>
                </Container>
            );

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
                                mapData.map((city,i) => {
                                    return (
                                    <CircleMarker 
                                        key={i} 
                                        center={[city.lat, city.long]} 
                                        readius={20 * Math.log(city.deaths / confirmed)}
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
                            data={top10Confirmed}
                            margin={{top: 5, right: 30, left: 0, bottom: 5}}
                            layout="vertical"
                            barSize={15}
                        >
                        <CartesianGrid strokeDasharray="1 1"/>
                        <XAxis  type="number"/>
                        <YAxis dataKey="CountryCode" type="category" />
                        <Tooltip />
                        <Legend  />
                        <Bar dataKey="TotalConfirmed" fill={colors.confirmed} />
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
                            data={top10Recovered}
                            margin={{top: 5, right: 30, left: 0, bottom: 5}}
                            layout="vertical"
                            barSize={15}
                        >
                        <CartesianGrid strokeDasharray="1 1"/>
                        <XAxis type="number"/>
                        <YAxis dataKey="CountryCode" type="category"/>
                        <Tooltip/>
                        <Legend />
                        <Bar dataKey="TotalRecovered" fill={colors.recovered} />
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
                            data={top10Deaths}
                            margin={{top: 5, right: 30, left: 0, bottom: 5}}
                            layout="vertical"
                            barSize={15}
                        >
                        <CartesianGrid strokeDasharray="1 1"/>
                        <XAxis type="number"/>
                        <YAxis dataKey="CountryCode" type="category"/>
                        <Tooltip/>
                        <Legend />
                        <Bar dataKey="TotalDeaths" fill={colors.deaths} width={1} />
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