import React, { Component } from 'react';
import Axios from 'axios';
import {Container,Row,Col,Table,Form, Card,Button} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
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

class DataChart extends Component{
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
        width:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      }
      componentDidMount(){

        ReactGA.initialize('UA-163115935-1');
        ReactGA.pageview('/Daily-Data');

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
        const res=await Axios.get("https://pomber.github.io/covid19/timeseries.json");
        const selectedCountry=this.state.selectedCountry;
        const byConfirmed=res.data[selectedCountry].slice(0);
        byConfirmed.sort(function(a,b){
            return b.confirmed - a.confirmed;
        });

        this.setState({
          countries:res.data[selectedCountry],
          tableCountries:byConfirmed,
          temp:Object.keys(res.data)
        })


        const indexOfLastData=this.state.currentPage * this.state.dataPerPage;
        const indexOfFirstData=indexOfLastData - this.state.dataPerPage;
        this.setState({
            loading:false,
            currentData:
                        this.state.dataPerPage === 0 ? 
                        this.state.tableCountries : 
                        this.state.tableCountries.slice(indexOfFirstData,indexOfLastData)
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
            tableCountries:byConfirmed
        })


        const indexOfLastData=this.state.currentPage * this.state.dataPerPage;
        const indexOfFirstData=indexOfLastData - this.state.dataPerPage;
        this.setState({
            loading:false,
            currentData:
                        this.state.dataPerPage === 0 ?
                        this.state.tableCountries :
                        this.state.tableCountries.slice(indexOfFirstData,indexOfLastData)
        })
      }

      updateChartPeriod(props){
        console.log(props);
        this.setState({
            dataPerPage:props,
        })
        this.getData();
        //console.log(event.target.value);
      }

    
render(){
    const {
        currentData,
        dataPerPage,
        selectedCountry,
        population,
        temp,
        tableCountries,
        width
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
                        <Card className="shadow-sm" style={{marginTop:'1rem',padding:'1rem',border:'none'}}>
                            <Table responsive size="sm" striped={true} bordered={true} hover>
                                <thead>
                                    <tr>
                                    <th>Date</th>
                                    <th>Confirmed</th>
                                    <th>Recovered</th>
                                    <th>Deaths</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    currentData.map((list,index)=>
                                    <tr key={index}>
                                    <td>{list.date}</td>
                                    <td>
                                        <NumberFormat 
                                            value={list.confirmed} 
                                            displayType={'text'} 
                                            thousandSeparator={true} 
                                        />
                                        
                                    </td>
                                    <td>
                                        <NumberFormat value={list.recovered} displayType={'text'} thousandSeparator={true} />
                                    </td>
                                    <td style={{fontWeight:"bold"}}>
                                        <NumberFormat value={list.deaths} displayType={'text'} thousandSeparator={true} />
                                    </td>
                                    </tr>
                                    )
                                    }
                                </tbody>
                                </Table>
                        </Card>
                    
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
}
export default DataChart;