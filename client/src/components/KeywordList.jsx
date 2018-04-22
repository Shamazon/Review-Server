const KeywordList = (props) => {
    
    let keywords = [];

    for(let i = 0; i < 3; i++){
        let row = [];
        for(let j = 0; j < 6; j++) {
            temp.push(window.nouns[Math.floor(Math.random() * window.nouns.length)]);
        }
        keywords.push(row);
    }

    return (
        <section>
            <h3>Read reviews that mention</h3>
                {keywords.map((row, rIndex) => 
                    <div>
                        {row.map((word, index) => <span className='keyword'>{word}</span>)}
                    </div>)}
        </section>
    )
}   

export default KeywordList;