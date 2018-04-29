import nouns from '../../../database/nouns.js'
import style from '../../dist/style/style.css';
import React from 'react';
const KeywordList = (props) => {
    
    let keywords = [];

    for(let i = 0; i < 3; i++){
        let row = [];
        for(let j = 0; j < 6; j++) {
            row.push(nouns[Math.floor(Math.random() * nouns.length)]);
        }
        keywords.push(row);
    }

    return (
        <section>
            <h3>Read reviews that mention</h3>
                {keywords.map((row, rIndex) => 
                    <div key={rIndex}>
                        {row.map((word, index) => <span key={index} className={style.keyword}>{word}</span>)}
                    </div>)}
        </section>
    )
}   

export default KeywordList;