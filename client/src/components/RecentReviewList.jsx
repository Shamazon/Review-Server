import CustomerImages from './CustomerImages.jsx';
import RecentReviewListItem from './RecentReviewListItem.jsx';

const RecentReviewList = (props) => {
    return (
        <div>
            <CustomerImages />
            <h3>Most recent customer reviews</h3>
            {props.reviews.map((item, index) => 
                <RecentReviewListItem key={index} review={item} />)}
        </div>
    )
}

export default RecentReviewList;