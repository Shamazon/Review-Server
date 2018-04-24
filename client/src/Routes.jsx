import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import App from './components/App.jsx';

const Index = (props) => {
  return <App product={props.params.id} />
}


class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Index} />
        <Route path="/:id" component={Index} />
      </Router>
    )
  }
}

ReactDOM.render(React.createElement(Routes), document.getElementById('app'));

export default Routes;