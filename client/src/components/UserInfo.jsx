var UserInfo = (props) => {
    var gender = Math.random() > 0.5 ? "men" : "women";
    var imgNumber = Math.floor(Math.random() * 50)
    return (
        <div className='user-section'>
                <img className='avatar' src={`https://randomuser.me/api/portraits/thumb/${gender}/${imgNumber}.jpg`} />
                <span className='user-name'>Amazon Customer</span>
        </div>
    )
}

export default UserInfo;