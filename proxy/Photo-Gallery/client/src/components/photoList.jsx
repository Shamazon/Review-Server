import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './photo.jsx';
import style from '../../dist/styles.css'

const Photolist = (props) => {
    return (
        <div className={style.photoList}>
            {props.photos.map((photo, i) => <Photo key={i} photo={photo} clickPicture={props.clickPicture} hoverPicture={props.hoverPicture}/>)}
        </div>
    )
}

export default Photolist;