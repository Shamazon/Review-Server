import React from 'react';
import Reviews from './components/App.jsx';
import Description from '../../proxy/Description/src/components/App.jsx'
import Photo from '../../proxy/Photo-Gallery/client/src/components/app.jsx'
import Related from '../../proxy/Related-Items/client/src/components/App.jsx'
import style from '../dist/style/layout.css'

const Layout = (props) => {
  return (
    <div>
      <div className={style.header}>
      </div>
      <div className={style.descriptionContainer} >
        <div className={style.photo} >
          <Photo id={props.params.id} />
        </div>
        <div className={style.description}>
          <Description id={props.params.id} />
          <div className={style.boughtTogether} >
          </div>
        </div>
        <div className={style.buyPhoto}>
        </div>
      </div>
        <Related id={props.params.id} />
        <div className={style.questions} >
        </div>
        <Reviews product={props.params.id} />
        <Related id={props.params.id} />
        <div className={style.footer} >
        </div>
    </div>
  )
}

export default Layout;