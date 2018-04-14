var ReviewBody = (props) => {
    return (
        <div className='review-body'>
            {props.body.split('\n').map((text, index) => React.createElement('p',  { key: index }, text))}
        </div>
    )
}

export default ReviewBody;