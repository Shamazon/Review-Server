import moment from 'moment';

var ReviewListItem = (props) => {
    var stars = [];
    for(var i = 0; i < 5; i++){
        if(props.review.starRating >= i) {
            stars.push(<img className='star' src='./img/fullstar.png' />)
        } else {
            stars.push(<img className='star' src='./img/emptystar.png' />)
        }
    }
    return (
        <article className='review-container'>
            <div className='user-section'>
                <img className='avatar' src='https://randomuser.me/api/portraits/thumb/men/40.jpg' />
                <span className='user-name'>Amazon Customer</span>
            </div>
            <span>{stars}</span>
            <a className='reviewTitle'>{props.review.title}</a>   
            
            <div className='reviewHeader'>{moment(props.review.date).format('MMMM Do YYYY')}</div>
            <div>
                <span className='reviewHeader'>Color: merry christmas</span>
                <span className='seperator'>|</span>
                <span className='verified'>Verified Purchase</span>
            </div>
            <div className='reviewBody'>
                {props.review.body.split('\n').map((text, index) => React.createElement('p',  { key: index }, text))}
            </div>
            <div className='helpful'>
            <a className='a-primary'>Comment</a><span className='seperator'>|</span>
                <span>{props.review.helpful} people found this review helpful. Was it helpful to you?</span> 
                <button>Yes</button><button>No</button><a className='a-secondary'>Report Abuse</a>
            </div>
        </article>
    )
}

export default ReviewListItem;