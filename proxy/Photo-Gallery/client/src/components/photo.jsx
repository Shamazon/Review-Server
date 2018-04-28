import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import style from '../../dist/styles.css'

const Photo = (props) => {
    return (
        <div> 
            <img className={style.photo} onMouseOver={props.hoverPicture} onClick={props.clickPicture} src={props.photo}/>
        </div>
    )
}

export default Photo;
