import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import Reviews from './components/App.jsx';
import Description from '../../proxy/Description/src/components/App.jsx'
import Photo from '../../proxy/Photo-Gallery/client/src/components/app.jsx'
import Related from '../../proxy/Related-Items/client/src/components/App.jsx'

const Index = (props) => {
  return (
    <div>
      <Reviews product={props.params.id} />
      <Description product={props.params.id} />
      <Related id={props.params.id} />
      <Photo id={props.params.id} />
    </div>
  )
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