import React from 'react';
import './article.css';

const Article = ({imgLink, date, title}) => {
    return (
        <div className='article-ctn'>
            <div className="article-img">
                <img src={imgLink} alt=''/>
            </div>
            <div className="article-content">
                <p>{date}</p>
                <h3>{title}</h3>
                <p>Read full article</p>
            </div>
        </div>
    )
}

export default Article
