import React from 'react';
import ReactDOM from 'react-dom';
 
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        product: null,
        reviews: []
    }

    this.getTopReviews = this.getTopReviews.bind(this);
    this.getRecentReviews = this.getRecentReviews.bind(this);
  }

  getTopReviews() {
    //Return the most helpful reviews 
    //To be used in the '.main-reviews' section on the left of the page
  }

  getRecentReviews() {
    //Return the most recent reviews
    //To be used in the '.recent-reviews' section on the right of the page
  }

  get


  render() {
    return (
        <div>
            <h1>Customer Reviews</h1>
            <div className='main-reviews'>
                <Stars />
                <Keywords />
                <ReviewList reviews={this.getTopReviews()} />
            </div>
            <div className='recent-reviews'>
                <RecentReviewList reviews={this.getRecentReviews()} />
            </div>
        </div>
    )   
  }
}
 
ReactDOM.render(React.createElement(App), document.getElementById('app'));

export default App;