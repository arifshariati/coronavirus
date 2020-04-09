import React, { Component } from 'react';
import {Container,Row,Col, Card} from 'react-bootstrap';
import ReactGA from 'react-ga';

class AboutCoronavirus extends Component{
    componentDidMount(){

        ReactGA.initialize('UA-163115935-1');
        ReactGA.pageview('/About-Coronavirus');
    }
    render(){
        return(
            <div className="mid">
                <Container fluid>
    
                    <Row className="justify-content-md-center" style={{textAlign:"left"}}>
                        <Col xs="12" lg="8">
                            <Card className="shadow-sm" style={{marginBottom:"1rem"}}>
                                <Card.Body>
                                    <Card.Title>Coronavirus Overview</Card.Title>
                                    <Card.Text>
                                        <p>Coronavirus disease (COVID-19) is an infectious disease caused by a new virus.<br/><br/>
                                        The disease causes respiratory illness (like the flu) with symptoms such as a cough, 
                                        fever, and in more severe cases, difficulty breathing. You can protect yourself by washing 
                                        your hands frequently, avoiding touching your face, and avoiding close contact 
                                        (1 meter or 3 feet) with people who are unwell.</p>
                                        <Card.Title>HOW IT SPREADS ?</Card.Title>
                                        <p>Coronavirus disease spreads primarily through contact with an infected person when they cough 
                                            or sneeze. It also spreads when a person touches a surface or object that has the virus on it, 
                                            then touches their eyes, nose, or mouth.</p>
    
                                    </Card.Text>
                                    <Card.Link href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" 
                                    alt="WHO Coronavirus pandemic"
                                    target="_blank">
                                        Learn more on WHO website
                                    </Card.Link>
                                </Card.Body>
                            </Card> 
    
                            <Card className="shadow-sm" style={{marginBottom:"1rem"}}>
                                <Card.Body>
                                    <Card.Title>Coronavirus Symptoms</Card.Title>
                                    <Card.Text>
                                        <p>People may be sick with the virus for 1 to 14 days before developing symptoms. 
                                            The most common symptoms of coronavirus disease (COVID-19) are fever, tiredness, 
                                            and dry cough. Most people (about 80%) recover from the disease without needing special 
                                            treatment.<br/><br/>
                                            More rarely, the disease can be serious and even fatal. Older people, and people with 
                                            other medical conditions (such as asthma, diabetes, or heart disease), may be more 
                                            vulnerable to becoming severely ill.<br/><br/>
                                            
                                            <b>People may experience:</b><br/><br/>
                                            1 - cough<br/>
                                            2 - fever<br/>
                                            3 - tiredness<br/>
                                            4 - difficulty breathing (severe cases)<br/></p>
                                        
    
                                    </Card.Text>
                                    <Card.Link href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" 
                                    alt="WHO Coronavirus pandemic Symptoms"
                                    target="_blank">
                                        Learn more on WHO website
                                    </Card.Link>
                                </Card.Body>
                            </Card>
    
                            <Card className="shadow-sm" style={{marginBottom:"1rem"}}>
                                <Card.Body>
                                    <Card.Title>Coronavirus Prevention</Card.Title>
                                    <Card.Text>
                                        <p>There’s currently no vaccine to prevent coronavirus disease (COVID-19).<br/><br/>
    
                                            You can protect yourself and help prevent spreading the virus to others if you:<br/><br/>
                                            
                                            <b>DO:</b><br/><br/>
                                            1 - Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub<br/><br/>
                                            2 - Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze<br/><br/>
                                            3 - Avoid close contact (1 meter or 3 feet) with people who are unwell<br/><br/>
                                            4 - Stay home and self-isolate from others in the household if you feel unwell<br/><br/>
    
                                            <b>DON'T:</b><br/><br/>
                                            1 - Touch your eyes, nose, or mouth if your hands are not clean<br/><br/>
                                            </p>
                                        
    
                                    </Card.Text>
                                    <Card.Link href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" 
                                    alt="WHO Coronavirus pandemic Prevention"
                                    target="_blank">
                                        Learn more on WHO website
                                    </Card.Link>
                                </Card.Body>
                            </Card>
    
                            <Card className="shadow-sm" style={{marginBottom:"1rem"}}>
                                <Card.Body>
                                    <Card.Title>Coronavirus Treatment</Card.Title>
                                    <Card.Text>
                                        <p>There is no specific medicine to prevent or treat coronavirus disease (COVID-19). 
                                            People may need supportive care to help them breathe.<br/><br/>
                                            
                                            <b>Self Care</b><br/><br/>
    
                                            If you have mild symptoms, stay at home until you’ve recovered. You can relieve your symptoms if you:<br/><br/>
    
                                            1 - rest and sleep<br/><br/>
                                            2 - keep warm<br/><br/>
                                            3 - drink plenty of liquids<br/><br/>
                                            4 - use a room humidifier or take a hot shower to help ease a sore throat and cough<br/><br/>
    
                                            <b>Medical Treatments</b><br/><br/>
                                            If you develop a fever, cough, and have difficulty breathing, promptly seek medical care. 
                                            Call in advance and tell your health provider of any recent travel or recent contact with travelers.<br/><br/>
                                            </p>
                                        
    
                                    </Card.Text>
                                    <Card.Link href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" 
                                    alt="WHO Coronavirus pandemic Treatment"
                                    target="_blank">
                                        Learn more on WHO website
                                    </Card.Link>
                                </Card.Body>
                            </Card>
    
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default AboutCoronavirus;