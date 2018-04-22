import ReviewListItem from './ReviewListItem.jsx'

const ReviewList = (props) => {
    return (
        <section>
            <h3>Top customer reviews</h3>
            {props.reviews.map((item, index) => <ReviewListItem review={item} key={index} />)}
        </section>
    )
}

export default ReviewList;