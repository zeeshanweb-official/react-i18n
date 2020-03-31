import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Users from './users'
// import Contact from './contact'
class Welcome extends React.Component {
    render() {
      return (
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/users" component={Users} />
                {/* <Route path="/contact" component={Contact} /> */}
            </div>
      </Router>
      );
    }
  }
export default Welcome;