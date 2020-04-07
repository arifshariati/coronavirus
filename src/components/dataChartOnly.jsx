import React, { Component } from 'react';
import Axios from 'axios';
import {Container,Row,Col,Table,Form, Card} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { AreaChart, XAxis,YAxis, CartesianGrid,Tooltip,Legend, Area} from 'recharts';

const colors = {
    confirmed: '#FFD31D',
    recovered: '#21BF72',
    deaths: '#DD2C00',
  };

class DataChartOnly extends Component{
    constructor (props){
        super(props);
        this.getData=this.getData.bind(this);
        this.getCountry=this.getCountry.bind(this);
      }
      
      state={
        currentData:[],
        currentPage:1,
        dataPerPage:7,
        selectedCountry:"China",
        temp:[],
        countries:[],
        tableCountries:[],
        width:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      }
      componentDidMount(){
        this.getCountryByIP();
        window.addEventListener('resize',this.updateDimensions);
      }
      updateDimensions = ()=>{
          const width = 
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;

          this.setState({width});
      }
      async getCountryByIP(){
          const res=await Axios.get("https://ipapi.co/json");
          this.setState({
              selectedCountry:res.data.country_name
          })
          this.getData();
      }
      async getData(){
        const selectedCountry=this.state.selectedCountry;
        const res=await Axios.get("https://pomber.github.io/covid19/timeseries.json");
        
        const byConfirmed=res.data[selectedCountry];
        byConfirmed.sort(function(a,b){
            return a.confirmed - b.confirmed;
        });

        this.setState({
          countries:res.data[selectedCountry],
          tableCountries:byConfirmed,
          temp:Object.keys(res.data)
        })
      }
      async getCountry(event){
        event.persist();
        const countryRes=await Axios.get("https://pomber.github.io/covid19/timeseries.json");
        const searchCountry=event.target.value;
        
        const byConfirmed=countryRes.data[searchCountry].slice(0);
        byConfirmed.sort(function(a,b){
            return b.confirmed - a.confirmed;
        });

        this.setState({
            selectedCountry:searchCountry,
            countries:countryRes.data[searchCountry],
            tableCountries:byConfirmed
        })
        const indexOfLastData=this.state.currentPage * this.state.dataPerPage;
        const indexOfFirstData=indexOfLastData - this.state.dataPerPage;
        this.setState({
            currentData:this.state.tableCountries.slice(indexOfFirstData,indexOfLastData)
        })
      }
    
render(){
    const {
        selectedCountry,
        temp,
        countries,
        width
    } = this.state;
    return(
        <div className="mid">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs="12" lg="8">
                    <Card className="shadow-sm" style={{marginBottom:'1rem',padding:'1rem',border:'none'}}>
                        <Form.Control as="select" size="sm" onChange={this.getCountry} custom>
                                <option>{selectedCountry}</option> 
                                {
                                temp.map((items,i)=>
                                <option key={i}>{items}</option>  
                                )
                                }
                            </Form.Control>
                    </Card>     
                    </Col>
                </Row>
            </Container>
            
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs lg="8">
                        <Card className="shadow-sm" style={{border:'none'}}>
                            <div style={{marginTop:'1rem'}}>
                                <h5 style={{textAlign:'center'}}>{selectedCountry}'s Data</h5>
                            </div>
                            <AreaChart 
                                width={ width > 980 ? 1200 : width - 80 } 
                                height={300} 
                                data={countries} 
                                margin={{top: 20, right: 20, left: 20, bottom: 20}}
                                >
                            <CartesianGrid strokeDasharray="1 1" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend/>
                            <Area type="monotone"  dataKey="confirmed" dot={false}  stroke={colors.confirmed} fill={colors.confirmed} />
                            <Area type="monotone" dataKey="recovered" dot={false} stroke={colors.recovered} fill={colors.recovered} />
                            <Area type="monotone" dataKey="deaths" dot={false}  stroke={colors.deaths} fill={colors.deaths} />
                            </AreaChart>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs lg="8">
                        <Card className="shadow-sm" style={{border:'none',marginTop:'1rem'}}>
                            <Row className="justify-content-md-center">
                                <Col>
                                    <AreaChart 
                                        width={
                                            width > 980
                                            ? 480
                                            : width > 720
                                            ? width / 2 - 80
                                            : width - 80
                                        }
                                        height={250} 
                                        data={countries} 
                                        margin={{top: 20, right: 20, left: 20, bottom: 20}}
                                        >
                                    <CartesianGrid strokeDasharray="1 1" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend/>
                                    <Area type="monotone"  dataKey="confirmed" dot={false}  stroke={colors.confirmed} fill={colors.confirmed} />
                                    </AreaChart>
                                </Col>
                                <Col style={{textAlign:'right'}}>
                                    <div style={{marginTop:'2rem',marginRight:'5rem'}}>
                                        <p>As of available data</p>
                                        <h3>
                                        <NumberFormat 
                                        value={
                                            countries && 
                                            countries[countries.length-1] &&
                                            countries[countries.length-1].confirmed
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        style={{color:colors.confirmed}} 
                                        />
                                        </h3>
                                        <p>Confirmed cases have been Registered</p>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs lg="8">
                        <Card className="shadow-sm" style={{border:'none',marginTop:'1rem'}}>
                            <Row className="justify-content-md-center">
                                <Col>
                                    <AreaChart 
                                        width={
                                            width > 980
                                            ? 480
                                            : width > 720
                                            ? width / 2 - 80
                                            : width - 80
                                        }
                                        height={250} 
                                        data={countries} 
                                        margin={{top: 20, right: 20, left: 20, bottom: 20}}
                                        >
                                    <CartesianGrid strokeDasharray="1 1" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend/>
                                    <Area type="monotone" dataKey="recovered" dot={false} stroke={colors.recovered} fill={colors.recovered} />
                                    </AreaChart>
                                </Col>
                                <Col style={{textAlign:'right'}}>
                                <div style={{marginTop:'2rem',marginRight:'5rem'}}>
                                        <p>As of available data</p>
                                        <h3>
                                        <NumberFormat 
                                        value={
                                            countries && 
                                            countries[countries.length-1] &&
                                            countries[countries.length-1].deaths
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true} 
                                        style={{color:colors.recovered}}
                                        />
                                        </h3>
                                        <p>Recovered cases have been Registered with</p>
                                        <h3>
                                        <NumberFormat 
                                        value={
                                            countries && 
                                            countries[0] &&
                                            Math.round(
                                                (countries[countries.length-1].recovered / countries[countries.length-1].confirmed) * 100
                                            )
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true} 
                                        /> %
                                        </h3>
                                        <p>Recovery rate</p>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs lg="8">
                        <Card className="shadow-sm" style={{border:'none',marginTop:'1rem'}}>
                            <Row className="justify-content-md-center">
                                <Col>
                                    <AreaChart 
                                        width={
                                            width > 980
                                            ? 480
                                            : width > 720
                                            ? width / 2 - 80
                                            : width - 80
                                        }
                                        height={250} 
                                        data={countries} 
                                        margin={{top: 20, right: 20, left: 20, bottom: 20}}
                                        >
                                    <CartesianGrid strokeDasharray="1 1" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend/>
                                    <Area type="monotone" dataKey="deaths" dot={false}  stroke={colors.deaths} fill={colors.deaths} />
                                    </AreaChart>
                                </Col>
                                <Col style={{textAlign:'right'}}>
                                    <div style={{marginTop:'2rem',marginRight:'5rem'}}>
                                        <p>As of available data</p>
                                        <h3>
                                        <NumberFormat 
                                        value={
                                            countries && 
                                            countries[countries.length-1] &&
                                            countries[countries.length-1].deaths
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true} 
                                        style={{color:colors.deaths}}
                                        />
                                        </h3>
                                        <p>Death cases have been Registered with</p>
                                        <h3>
                                        <NumberFormat 
                                        value={
                                            countries && 
                                            countries[countries.length-1] &&
                                            Math.round(
                                                (countries[countries.length-1].deaths / countries[countries.length-1].confirmed) * 100
                                            )
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true} 
                                        />% 
                                        </h3>
                                        <p> Death rate</p>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
}
export default DataChartOnly;