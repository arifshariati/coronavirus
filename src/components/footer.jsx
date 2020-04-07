import React from 'react';
import { Container, Row,Col} from 'react-bootstrap';
const dataProvider = 'https://github.com/CSSEGISandData/COVID-19';
const dataParser = 'https://github.com/pomber/covid19';

function Footer(){
    return(
        <div className="footer">
            <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs="12" lg="8">
                <p style={{ fontSize: 14, lineHeight: 1.2, marginTop: 10,marginBottom:24, marginLeft:50,marginRight:50 }}>
                    Data, Numbers and Stats provided on this website is pulled from different data sources. This website is 
                    merely a mean of providing a general overview and graphical representation of COVID-19 pandemic. Viewers / visitors 
                    of this website is advised not to absorb Data, Numbers and Stats as final and do visit other information sources
                    for the sack of your information.  
                </p>
                <p>
                    Data retrieved from <a href={dataProvider} rel="alternate nooperner noreferre" target="_blank">Johns Hopkins</a> via{' '}
                    <a href={dataParser} rel="alternate nooperner noreferre" target="_blank">@pomber</a> <br />
                </p>
                <p>
                    Developed with <a href="http://recharts.org/" rel="alternate nooperner noreferre" target="_blank">Recharts for Responsive Charting</a>,{' '}
                    <a href="https://react-bootstrap.github.io/" rel="alternate nooperner noreferre" target="_blank">React-Bootstrap</a>,{' '}
                    <a href="https://react-leaflet.js.org/" rel="alternate nooperner noreferre" target="_blank">React-Leaflet for Map Data Visualization</a>,{' '}
                    <a href="https://reactjs.org" rel="alternate nooperner noreferre" target="_blank">React</a> by{' '}
                    <a href="https://github.com/arifshariati" rel="alternate nooperner noreferre" target="_blank">Arif Shariati</a>
                </p>
                <p>
                    There is always room for improvement ! <b>if you want to contribute?</b> Please do so !{' '}
                    <a href="https://github.com/eminx/thecurve" rel="alternate nooperner noreferre" target="_blank">Create an issue</a> or{' '}
                    <a href="mailto:mohammad.arif.fast@hotmail.com">send me an email</a>
                </p>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Footer;