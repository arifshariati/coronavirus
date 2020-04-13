import React, { Component } from 'react';
import '../src/assets/css/App.css';
import Header from './components/header';
import LandingPage from './components/landingPage';
import DataChart from './components/dataChart';
import DataChartOnly from './components/dataChartOnly';
import News from './components/news';
import AboutCoronavirus from './components/aboutCoronavirus';
import Footer from './components/footer';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route} from 'react-router-dom';



class App extends Component {
  state={
    loading:true
  }
  componentDidMount(){
    this.initializeReactGA();
    this.setState({
      loading:false
    })
  }
  initializeReactGA(){
    ReactGA.initialize('UA-163115935-1');
    ReactGA.pageview('/homepage');
  }
  
  render(){
    return (
      
      <div className="App">
        <Router>
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route  path="/Data-Visualization" component={DataChartOnly} />
          <Route path="/Daily-Data" component={DataChart} />
          <Route path="/News" component={News} />
          <Route path="/About-Coronavirus" component={AboutCoronavirus} />
          <Footer />
        </Router>
      </div>
      )
  }
}

export default App;
