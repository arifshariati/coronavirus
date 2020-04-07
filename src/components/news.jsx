import React,{ Component } from 'react';
import Axios from 'axios';
import {Container,Row,Col,Table,Form, Card, CardDeck, CardColumns, Button} from 'react-bootstrap';

const trumpNewsEndpoint="https://newsapi.org/v2/top-headlines?q=trump&apiKey=1eef6d1799164641972598884245ee39";
const USHealthEndpoint="https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=1eef6d1799164641972598884245ee39";
const technologyEndpoint="https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=1eef6d1799164641972598884245ee39";
const businessEndpoint="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1eef6d1799164641972598884245ee39";
const entertainmentEndpoint="https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=1eef6d1799164641972598884245ee39";
const sportsEndpoint="https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=1eef6d1799164641972598884245ee39";

class News extends Component{
    state={
        trumpNews:[],
        USHealth:[],
        technology:[],
        business:[],
        entertainment:[],
        sports:[]
    }

    componentDidMount(){
        this.getNews();
    }
    async getNews(){
        const trumpNewsRes=await Axios.get(trumpNewsEndpoint);
        const USHealthRes=await Axios.get(USHealthEndpoint);
        const technologyRes=await Axios.get(technologyEndpoint);
        const businessRes=await Axios.get(businessEndpoint);
        const entertainmentRes=await Axios.get(entertainmentEndpoint);
        const sportsRes=await Axios.get(sportsEndpoint);
        console.log(trumpNewsRes.data.articles);
        this.setState({
            trumpNews:trumpNewsRes.data.articles.slice(0,3),
            USHealth:USHealthRes.data.articles.slice(0,6),
            technology:technologyRes.data.articles.slice(0,3),
            business:businessRes.data.articles.slice(0,3),
            entertainment:entertainmentRes.data.articles.slice(0,3),
            sports:sportsRes.data.articles.slice(0,3)
        })
    }
    render(){
        const {
            trumpNews,
            USHealth,
            technology,
            business,
            entertainment,
            sports
        }=this.state;
        return(
            <div className="mid">
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col xs lg="8" style={{marginBottom:'1rem',marginTop:'1rem',padding:'0rem'}}>
                            <h3>Latest News on Health</h3>
                            <span className="fade-line"></span>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs="12" lg="8">
                            <CardColumns>
                                
                                    {
                                        USHealth.map((newsItem,i)=>
                                        <Card key={i}
                                            className="shadow-sm" 
                                            style={{marginBottom:'1rem',padding:'0rem',border:'none'}}
                                        >
                                            <Card.Img variant="top" style={{minHeight:'10rem'}} src={newsItem.urlToImage} />
                                            <small className="text-muted">published at {newsItem.publishedAt}</small>
                                            <Card.Body>
                                            <Card.Title style={{fontSize:'medium',textAlign:'left'}}>{newsItem.title}</Card.Title>
                                            <Card.Text style={{overflow:'hidden',textOverflow:'ellipsis',maxHeight:'4rem',whiteSpace:'pre-wrap'}}>
                                                {newsItem.description}
                                            </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Card.Link href={newsItem.url} target="_blank"><b>Read Fill Story on</b> {newsItem.source.name}</Card.Link>
                                            </Card.Footer>
                                        </Card>
                                        )
                                    } 
                            </CardColumns>    
                        </Col>
                    </Row>
                    

                    <Row className="justify-content-md-center">
                        <Col xs lg="8" style={{marginBottom:'1rem',marginTop:'1rem',padding:'0rem'}}>
                            <h3>What Donuld Trump Says ?</h3>
                            <span className="fade-line"></span>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs="12" lg="8">
                            <CardColumns>
                                
                                    {
                                        trumpNews.map((newsItem,i)=>
                                        <Card key={i}
                                            className="shadow-sm" 
                                            style={{marginBottom:'1rem',padding:'0rem',border:'none'}}
                                        >
                                            <Card.Img variant="top" style={{minHeight:'10rem'}} src={newsItem.urlToImage} />
                                            <small className="text-muted">published at {newsItem.publishedAt}</small>
                                            <Card.Body>
                                            <Card.Title style={{fontSize:'medium',textAlign:'left'}}>{newsItem.title}</Card.Title>
                                            <Card.Text style={{overflow:'hidden',textOverflow:'ellipsis',maxHeight:'4rem',whiteSpace:'pre-wrap'}}>
                                                {newsItem.description}
                                            </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Card.Link href={newsItem.url} target="_blank"><b>Read Fill Story on</b> {newsItem.source.name}</Card.Link>
                                            </Card.Footer>
                                        </Card>
                                        )
                                    } 
                            </CardColumns>    
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col xs lg="8" style={{marginBottom:'1rem',marginTop:'1rem',padding:'0rem'}}>
                            <h3>An Inside to Technology</h3>
                            <span className="fade-line"></span>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs="12" lg="8">
                            <CardColumns>
                                
                                    {
                                        technology.map((newsItem,i)=>
                                        <Card key={i}
                                            className="shadow-sm" 
                                            style={{marginBottom:'1rem',padding:'0rem',border:'none'}}
                                        >
                                            <Card.Img variant="top" style={{minHeight:'10rem'}} src={newsItem.urlToImage} />
                                            <small className="text-muted">published at {newsItem.publishedAt}</small>
                                            <Card.Body>
                                            <Card.Title style={{fontSize:'medium',textAlign:'left'}}>{newsItem.title}</Card.Title>
                                            <Card.Text style={{overflow:'hidden',textOverflow:'ellipsis',maxHeight:'4rem',whiteSpace:'pre-wrap'}}>
                                                {newsItem.description}
                                            </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Card.Link href={newsItem.url} target="_blank"><b>Read Fill Story on</b> {newsItem.source.name}</Card.Link>
                                            </Card.Footer>
                                        </Card>
                                        )
                                    } 
                            </CardColumns>    
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col xs lg="8" style={{marginBottom:'1rem',marginTop:'1rem',padding:'0rem'}}>
                            <h3>Business Insider</h3>
                            <span className="fade-line"></span>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs="12" lg="8">
                            <CardColumns>
                                
                                    {
                                        business.map((newsItem,i)=>
                                        <Card key={i}
                                            className="shadow-sm" 
                                            style={{marginBottom:'1rem',padding:'0rem',border:'none'}}
                                        >
                                            <Card.Img variant="top" style={{minHeight:'10rem'}} src={newsItem.urlToImage} />
                                            <small className="text-muted">published at {newsItem.publishedAt}</small>
                                            <Card.Body>
                                            <Card.Title style={{fontSize:'medium',textAlign:'left'}}>{newsItem.title}</Card.Title>
                                            <Card.Text style={{overflow:'hidden',textOverflow:'ellipsis',maxHeight:'4rem',whiteSpace:'pre-wrap'}}>
                                                {newsItem.description}
                                            </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Card.Link href={newsItem.url} target="_blank"><b>Read Fill Story on</b> {newsItem.source.name}</Card.Link>
                                            </Card.Footer>
                                        </Card>
                                        )
                                    } 
                            </CardColumns>    
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col xs lg="8" style={{marginBottom:'1rem',marginTop:'1rem',padding:'0rem'}}>
                            <h3>Entertainment Hall</h3>
                            <span className="fade-line"></span>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs="12" lg="8">
                            <CardColumns>
                                
                                    {
                                        entertainment.map((newsItem,i)=>
                                        <Card key={i}
                                            className="shadow-sm" 
                                            style={{marginBottom:'1rem',padding:'0rem',border:'none'}}
                                        >
                                            <Card.Img variant="top" style={{minHeight:'10rem'}} src={newsItem.urlToImage} />
                                            <small className="text-muted">published at {newsItem.publishedAt}</small>
                                            <Card.Body>
                                            <Card.Title style={{fontSize:'medium',textAlign:'left'}}>{newsItem.title}</Card.Title>
                                            <Card.Text style={{overflow:'hidden',textOverflow:'ellipsis',maxHeight:'4rem',whiteSpace:'pre-wrap'}}>
                                                {newsItem.description}
                                            </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Card.Link href={newsItem.url} target="_blank"><b>Read Fill Story on</b> {newsItem.source.name}</Card.Link>
                                            </Card.Footer>
                                        </Card>
                                        )
                                    } 
                            </CardColumns>    
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col xs lg="8" style={{marginBottom:'1rem',marginTop:'1rem',padding:'0rem'}}>
                            <h3>Sports Universe</h3>
                            <span className="fade-line"></span>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs="12" lg="8">
                            <CardColumns>
                                
                                    {
                                        sports.map((newsItem,i)=>
                                        <Card key={i}
                                            className="shadow-sm" 
                                            style={{marginBottom:'1rem',padding:'0rem',border:'none'}}
                                        >
                                            <Card.Img variant="top" style={{minHeight:'10rem'}} src={newsItem.urlToImage} />
                                            <small className="text-muted">published at {newsItem.publishedAt}</small>
                                            <Card.Body>
                                            <Card.Title style={{fontSize:'medium',textAlign:'left'}}>{newsItem.title}</Card.Title>
                                            <Card.Text style={{overflow:'hidden',textOverflow:'ellipsis',maxHeight:'4rem',whiteSpace:'pre-wrap'}}>
                                                {newsItem.description}
                                            </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Card.Link href={newsItem.url} target="_blank"><b>Read Fill Story on</b> {newsItem.source.name}</Card.Link>
                                            </Card.Footer>
                                        </Card>
                                        )
                                    } 
                            </CardColumns>    
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default News;