import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage'
import Resume from '../components/Resume'
import NavBar from './NavBar'
import About from '../components/About'
import BlogIndex from './BlogIndex'
import FormContainer from './FormContainer'
import ProjectsContainer from './ProjectsContainer'


const history = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return(
      <div>
        <Router history={history}>
          <div>
            <Route path="/" component={NavBar} />
            <Route exact path="/" component={HomePage} />
            <Route path="/resume" component={Resume} />
            <Route path="/blog" component={BlogIndex} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={FormContainer} />
            <Route path="/projects" component={ProjectsContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
