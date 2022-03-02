import React from 'react'
import './possibility.css';
import possImg from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <div className='poss section__padding' id='poss'>
            <div className="poss-img">
                <img src={possImg} alt="poss" />
            </div>
            <div className="poss-content">
                <h4> Request Early Access to Get Started </h4>
                <h1 className="gradient__text"> The possibilities are beyond your imagination </h1>
                <p> Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <h4> Request Early Access to Get Started </h4>
            </div>
        </div>
    )
}

export default Possibility
