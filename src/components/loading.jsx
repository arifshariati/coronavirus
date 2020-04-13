import React, { Component } from "react";
import Loader from 'react-loader-spinner';
import {Container,Row,Col, Card} from 'react-bootstrap';

class Loading extends Component{
    render(){
        return (
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs="12" lg="8">
                    <Card 
                        className="shadow" 
                        style={{marginBottom:'1rem',paddingTop:'15rem',border:'none',minHeight:"700px"}}
                    >
                        <Loader 
                            type="ThreeDots"
                            color="#DD2C00"
                            height={100}
                            width={100}
                            timeout={9000000000}
                        />
                    </Card>     
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Loading;
