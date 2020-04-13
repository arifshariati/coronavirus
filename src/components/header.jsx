import React from 'react';
import {Navbar,Nav, Container, Row,Col} from 'react-bootstrap';
function Header(){
return(
    <div className="header">
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs="12" lg="8">
                    <Navbar expand="lg">
                        <Navbar.Brand href="/">COVID-19 Cases Visualization </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav pullright>
                                <Nav.Link href="/" alt="Coronavirus Home Page">Home</Nav.Link>
                                <Nav.Link href="/Data-Visualization" alt="Coronavirus visual data">Data Visualization</Nav.Link>
                                <Nav.Link href="/Daily-Data" alt="Coronavirus Deaths and Recovered Cases">Daily Data</Nav.Link>
                                <Nav.Link href="/About-Coronavirus" alt="Coronavirus Overview Coronavirus Symptops Coronavirus Prevention Coronavirus Treatment">About COVID-19</Nav.Link>
                                <Nav.Link href="/News" alt="Coronavirus Latest News">NEWS Headlines</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
        </div>
)
}
export default Header;