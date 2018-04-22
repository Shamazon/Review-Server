import UserInfo from './UserInfo.jsx';
import ReviewTitle from './ReviewTitle.jsx';
import ReviewBody from './ReviewBody.jsx';

const RecentReviewListItem = (props) => {
    return (
        <div className='recent-review-container'>
            <UserInfo />
            <ReviewTitle review={props.review} />
            <ReviewBody body={props.review.body} />
        </div>
    )
}

export default RecentReviewListItem;