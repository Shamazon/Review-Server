const Stars = (props) => {
    let stars = [];
    var numStars = [60, 10, 5, 5, 20];
    for(var i = 0; i < 5; i++){
        stars.push(<img className='star' src='./img/fullstar.png' />)
    }

   return (
        <section>
            <span className='starRating'>
            {stars}
            </span>
            <a className='num-reviews'>{props.numReviews}</a>
            
            <div><a> 5 out of 5 stars </a></div>
            <div className='star-grid-container'>
                <div className='star-breakdown'>
                    <div><a>5 star</a>
                        <span className='star-bar'></span>
                    <a>{numStars[0]}%</a></div>
                    <div><a>4 star</a>
                        <span className='star-bar'></span>
                    <a>{numStars[1]}%</a></div>
                    <div><a>3 star</a>
                        <span className='star-bar'></span>
                    <a>{numStars[2]}%</a></div>
                    <div><a>2 star</a>
                        <span className='star-bar'></span>
                    <a>{numStars[3]}%</a></div>
                    <div><a>1 star</a>
                        <span className='star-bar'></span>
                    <a>{numStars[4]}%</a></div>
                </div>

                <div className='share-review'>
                    Share your thoughts with other customers
                    <button className='write-review-button'>Write a Customer Review</button>
                </div>
            </div>
        <div><a className='underline'>See all {props.numReviews} customer reviews</a></div>
        </section>
    )
}

export default Stars;