var KeywordList = (props) => {
    
    var keywords = [];

    for(var i = 0; i < 3; i++){
        var temp = [];
        for(var j = 0; j < 6; j++) {
            temp.push(window.nouns[Math.floor(Math.random() * window.nouns.length)]);
        }
        keywords.push(temp);
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