import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './components/Stars.jsx';
import RecentReviewList from './components/RecentReviewList.jsx';
import ReviewList from './components/ReviewList.jsx';
import KeywordList from './components/KeywordList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        product: 0,
        reviews: []
    }

    this.getTopReviews = this.getTopReviews.bind(this);
    this.getRecentReviews = this.getRecentReviews.bind(this);
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews(this.state.product);
  }

  getReviews (productId) {
    $.ajax({
      method: 'GET',
      url: `/reviews/${productId}`,
      dataType: 'json',
      success: (data, status) => {
        if(status === 'success') {
          this.setState({reviews: data})
        } else {
          this.setState({reviews: []})
        }
      }
    })
  }

  getTopReviews() {
    //Return the most helpful reviews 
    //To be used in the '.main-reviews' section on the left of the page
    return this.state.reviews.slice(0,10);
  }

  getRecentReviews() {
    //Return the most recent reviews
    //To be used in the '.recent-reviews' section on the right of the page
    return this.state.reviews.slice(0,10);
  }

  render() {
    return (
        <div className='app-container'>
            <h2>Customer Reviews</h2>
            <div className='main-reviews'>
                <Stars numReviews={this.state.reviews.length}/>
                <KeywordList />
                <ReviewList reviews={this.getTopReviews()} />
            </div>
            <div className='recent-reviews'>
                <RecentReviewList reviews={this.getRecentReviews()} />
            </div>
            <div><a className='underline'>See all {this.state.reviews.length} customer reviews</a>
            <button className='write-review-button'>Write a Customer Review</button>
            </div>
        </div>
    )   
  }
}
 
ReactDOM.render(React.createElement(App), document.getElementById('app'));

export default App;