
import React from 'react';
import moment from 'moment';
import style from '../../dist/style/style.css'

var ReviewTitle = (props) => {

    var stars = [];
    for(var i = 0; i < 5; i++){
        if(props.review.star_rating >= i) {
            stars.push(<img key={i} className={style.star} src='./img/fullstar.png' />)
        } else {
            stars.push(<img key={i} className={style.star} src='./img/emptystar.png' />)
        }
    }

    return (
        <div>
            <span>{stars}</span>
            <a className={`${style.reviewTitle} ${style.underline}`}>{props.review.title}</a>   
            
            <div className={style.gray}>
                {moment().subtract(1, 'years') < moment(props.review.date) ?
                 moment(props.review.date).fromNow(): 
                 moment(props.review.date).format('MMMM Do YYYY') 
                }</div>
        </div>
    )
}

export default ReviewTitle;