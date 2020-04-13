import React, { Component } from 'react';
import Axios from 'axios';
import {Container,Row,Col,Table,Form, Card, Button} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { AreaChart, XAxis,YAxis, CartesianGrid,Tooltip,Legend, Area} from 'recharts';
import ReactGA from 'react-ga';
import Loading from './loading';

const colors = {
    confirmed: '#FFD31D',
    recovered: '#21BF72',
    deaths: '#DD2C00',
  };

  const showChartPeriod=[
    {
        period:0,
        periodTitle:"All Data"
    },
    {
        period:7,
        periodTitle:"Last 7 Days"
    },
    {
        period:14,
        periodTitle:"Last 14 Days"
    },
    {
        period:30,
        periodTitle:"Last 30 Days"
    }
]
class DataChartOnly extends Component{
    constructor (props){
        super(props);
        this.getData=this.getData.bind(this);
        this.getCountry=this.getCountry.bind(this);
        this.updateChartPeriod=this.updateChartPeriod.bind(this);
      }
      
      state={
        loading:true,
        currentData:[],
        currentPage:1,
        dataPerPage:7,
        selectedCountry:"China",
        population:0,
        temp:[],
        countries:[],
        tableCountries:[],
        chartPeriod:7,
        width:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
        chartPeriodSelected:7,
        totalConfirmed:0,
        totalRecovered:0,
        totalDeaths:0
      }
      componentDidMount(){
        
        ReactGA.initialize('UA-163115935-1');
        ReactGA.pageview('/Data-Visualization');

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
              selectedCountry:res.data.country_name ==="United States" ? "US" : res.data.country_name,
              population:res.data.country_population 
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
        
        const totalConfirmed=byConfirmed[byConfirmed.length-1].confirmed;
        const totalRecovered=byConfirmed[byConfirmed.length-1].recovered;
        const totalDeaths=byConfirmed[byConfirmed.length-1].deaths;
        
        //console.log(totalConfirmed);
        
        const indexOfLastData =res.data[selectedCountry].length; 
        const indexOfFirstData=indexOfLastData - this.state.chartPeriod;
        //console.log(showChartPeriod);
        this.setState({
            loading:false,
          countries:res.data[selectedCountry].slice(indexOfFirstData,indexOfLastData),
          tableCountries:byConfirmed,
          temp:Object.keys(res.data),
          totalConfirmed,
          totalRecovered,
          totalDeaths
        })
      }
      async getCountry(event){
        event.persist();
        const countryRes=await Axios.get("https://pomber.github.io/covid19/timeseries.json");
        const searchCountry=event.target.value;
        
        const byConfirmed=countryRes.data[searchCountry].slice(0);
        byConfirmed.sort(function(a,b){
            return a.confirmed - b.confirmed;
        });

        const totalConfirmed=byConfirmed[byConfirmed.length-1].confirmed;
        const totalRecovered=byConfirmed[byConfirmed.length-1].recovered;
        const totalDeaths=byConfirmed[byConfirmed.length-1].deaths;

        const indexOfLastData =countryRes.data[searchCountry].length; 
        const indexOfFirstData=indexOfLastData - this.state.chartPeriod;

        this.setState({
            loading:false,
            selectedCountry:searchCountry,
            countries:countryRes.data[searchCountry].slice(indexOfFirstData,indexOfLastData),
            tableCountries:byConfirmed,
            totalConfirmed,
            totalRecovered,
            totalDeaths
        })
        
      }

      async updateChartPeriod(props){
        

        const countryRes=await Axios.get("https://pomber.github.io/covid19/timeseries.json");
        
        //console.log(countryRes.data[this.state.selectedCountry]);
        
        const byConfirmed=countryRes.data[this.state.selectedCountry].slice(0);
        byConfirmed.sort(function(a,b){
            return b.confirmed - a.confirmed;
        });

        const indexOfLastData =countryRes.data[this.state.selectedCountry].length; 
        const indexOfFirstData=indexOfLastData - props;

        const countries = props === 0 ? 
        countryRes.data[this.state.selectedCountry] : 
        countryRes.data[this.state.selectedCountry].slice(indexOfFirstData,indexOfLastData);
        
        this.setState({
            loading:false,
            countries,
            chartPeriodSelected:props
        })
        //console.log(event.target.value);
      }
    
render(){
    const {
        selectedCountry,
        population,
        temp,
        countries,
        width,
        chartPeriodSelected,
        totalConfirmed,
        totalRecovered,
        totalDeaths
    } = this.state;

    const loading = this.state.loading;
    if(loading) return (
        <Loading />
    );
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

                <Row className="justify-content-md-center" style={{marginBottom:"1rem"}}>
                    <Col xs="12" lg="8">
                        {
                            showChartPeriod.map((period,index)=>
                                <Button 
                                    key={index} variant="primary"
                                    size="sm"
                                    style={{margin:"0.1rem"}}
                                    onClick={()=>this.updateChartPeriod(period.period)}
                                >
                                    {period.periodTitle}
                                </Button>
                            )               
                        }
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
                                        height={350} 
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
                                        <p>As of Selected Period available data</p>
                                        <span><b>From ==> </b> {countries && countries[0] && countries[0].date}</span>
                                        <h5>
                                        <NumberFormat 
                                        value={
                                            countries && 
                                            countries[0] &&
                                            countries[0].confirmed
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        style={{color:colors.confirmed}} 
                                        />
                                        </h5>
                                        <span><b>To ==> </b> {countries && countries[countries.length-1] && countries[countries.length-1].date}</span>
                                        <h5>
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
                                        </h5>

                                        <span><b>Confirmed Cases Increased by </b></span>
                                        <h3>
                                        <NumberFormat 
                                        value={
                                            (
                                                countries && 
                                                countries[countries.length-1] &&
                                                countries[countries.length-1].confirmed
                                            ) -
                                            (
                                                countries && 
                                                countries[0] &&
                                                countries[0].confirmed 
                                            )
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        style={{color:colors.deaths}} 
                                        />
                                        </h3>

                                        <span><b>Daily Average  </b></span>
                                        <h5>
                                        <NumberFormat 
                                        value={
                                            Math.round(
                                            (
                                            (
                                                countries && 
                                                countries[countries.length-1] &&
                                                countries[countries.length-1].confirmed
                                            ) -
                                            (
                                                countries && 
                                                countries[0] &&
                                                countries[0].confirmed
                                            )
                                            ) /
                                            (
                                                chartPeriodSelected === 0 ? 
                                                countries.length : 
                                                chartPeriodSelected
                                            )
                                            )
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        />
                                        
                                        </h5>

                                        <span><b>Growth % </b></span>
                                        <h5>
                                        <NumberFormat 
                                        value={
                                            Math.round(
                                            ((
                                                (
                                                    countries && 
                                                    countries[countries.length-1] &&
                                                    countries[countries.length-1].confirmed
                                                ) -
                                                (
                                                    countries && 
                                                    countries[0] &&
                                                    countries[0].confirmed
                                                )
                                            ) /
                                                (
                                                    totalConfirmed
                                                )
                                            ) * 100,2) 
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        style={{color:colors.deaths}} 
                                        /> 
                                        
                                        </h5>
                                        <p>Last {countries.length} days</p>
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
                                        height={350} 
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
                                        <p>As of Selected Period available data</p>
                                        <span><b>From ==> </b> {countries && countries[0] && countries[0].date}</span>
                                        <h5>
                                        <NumberFormat 
                                        value={
                                            countries && 
                                            countries[0] &&
                                            countries[0].recovered
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        style={{color:colors.recovered}} 
                                        />
                                        </h5>
                                        <span><b>To ==> </b> {countries && countries[countries.length-1] && countries[countries.length-1].date}</span>
                                        <h5>
                                        <NumberFormat 
                                        value={
                                            countries && 
                                            countries[countries.length-1] &&
                                            countries[countries.length-1].recovered
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        style={{color:colors.recovered}} 
                                        />
                                        </h5>

                                        <span><b>Recovery Cases Increased by </b></span>
                                        <h3>
                                        <NumberFormat 
                                        value={
                                            (
                                                countries && 
                                                countries[countries.length-1] &&
                                                countries[countries.length-1].recovered
                                            ) -
                                            (
                                                countries && 
                                                countries[0] &&
                                                countries[0].recovered
                                            )
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        style={{color:colors.recovered}} 
                                        />
                                        </h3>

                                        <span><b>Daily Average  </b></span>
                                        <h5>
                                        <NumberFormat 
                                        value={
                                            Math.round(
                                            (
                                            (
                                                countries && 
                                                countries[countries.length-1] &&
                                                countries[countries.length-1].recovered
                                            ) -
                                            (
                                                countries && 
                                                countries[0] &&
                                                countries[0].recovered
                                            )
                                            ) /
                                            (
                                                chartPeriodSelected === 0 ? 
                                                countries.length : 
                                                chartPeriodSelected
                                            )
                                            )
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        />
                                        
                                        </h5>

                                        <span><b>Growth % </b></span>
                                        <h5>
                                        <NumberFormat 
                                        value={
                                            Math.round(
                                            ((
                                                (
                                                    countries && 
                                                    countries[countries.length-1] &&
                                                    countries[countries.length-1].recovered
                                                ) -
                                                (
                                                    countries && 
                                                    countries[0] &&
                                                    countries[0].recovered
                                                )
                                            ) /
                                                (
                                                    totalRecovered
                                                )
                                            ) * 100,2) 
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        style={{color:colors.recovered}} 
                                        /> 
                                        
                                        </h5>
                                        <p>Last {countries.length} days</p>
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
                                        height={350} 
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
                                        <p>As of Selected Period available data</p>
                                        <span><b>From ==> </b> {countries && countries[0] && countries[0].date}</span>
                                        <h5>
                                        <NumberFormat 
                                        value={
                                            countries && 
                                            countries[0] &&
                                            countries[0].dearhs
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        style={{color:colors.deaths}} 
                                        />
                                        </h5>
                                        <span><b>To ==> </b> {countries && countries[countries.length-1] && countries[countries.length-1].date}</span>
                                        <h5>
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
                                        </h5>

                                        <span><b>Death Cases Increased by </b></span>
                                        <h3>
                                        <NumberFormat 
                                        value={
                                            (
                                                countries && 
                                                countries[countries.length-1] &&
                                                countries[countries.length-1].deaths
                                            ) -
                                            (
                                                countries && 
                                                countries[0] &&
                                                countries[0].deaths 
                                            )
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        style={{color:colors.deaths}} 
                                        />
                                        </h3>

                                        <span><b>Daily Average  </b></span>
                                        <h5>
                                        <NumberFormat 
                                        value={
                                            Math.round(
                                            (
                                            (
                                                countries && 
                                                countries[countries.length-1] &&
                                                countries[countries.length-1].deaths
                                            ) -
                                            (
                                                countries && 
                                                countries[0] &&
                                                countries[0].deaths
                                            )
                                            ) /
                                            (
                                                chartPeriodSelected === 0 ? 
                                                countries.length : 
                                                chartPeriodSelected
                                            )
                                            )
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        />
                                        
                                        </h5>

                                        <span><b>Growth % </b></span>
                                        <h5>
                                        <NumberFormat 
                                        value={
                                            Math.round(
                                            ((
                                                (
                                                    countries && 
                                                    countries[countries.length-1] &&
                                                    countries[countries.length-1].deaths
                                                ) -
                                                (
                                                    countries && 
                                                    countries[0] &&
                                                    countries[0].deaths
                                                )
                                            ) /
                                                (
                                                    totalDeaths
                                                )
                                            ) * 100,2) 
                                        } 
                                        displayType={'text'} 
                                        thousandSeparator={true}
                                        style={{color:colors.deaths}} 
                                        /> 
                                        
                                        </h5>
                                        <p>Last {countries.length} days</p>
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