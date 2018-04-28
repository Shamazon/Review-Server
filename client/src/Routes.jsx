import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import Layout from './Layout.jsx'

class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout} />
        <Route path="/:id" component={Layout} />
      </Router>
    )
  }
}

ReactDOM.render(React.createElement(Routes), document.getElementById('app'));

export default Routes;