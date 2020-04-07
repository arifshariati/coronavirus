import React, { Component } from 'react';
import '../src/assets/css/App.css';
import Header from './components/header';
import LandingPage from './components/landingPage';
import DataChart from './components/dataChart';
import DataChartOnly from './components/dataChartOnly';
import News from './components/news';
import Footer from './components/footer';
import { BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route  path="/DataChartOnly" component={DataChartOnly} />
          <Route path="/Data-Table" component={DataChart} />
          <Route path="/News" component={News} />
          <Footer />
        </Router>
      </div>
      )
  }
}

export default App;
