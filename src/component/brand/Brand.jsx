import React from 'react'
import './brand.css';
import {google,slack, atlassian, dropbox,shopify} from './brandImg'
const Brand = () => {
    return (
        <div className='brand section__padding'>
            <div>
                <img src={google} alt="google"/>
            </div>
            <div>
                <img src={slack} alt="slack"/>
            </div>
            <div>
                <img src={atlassian} alt="atl"/>
            </div>
            <div>
                <img src={shopify} alt="shpy"/>
            </div>
            <div>
                <img src={dropbox} alt="dbx"/>
            </div>
        </div>
    )
}

export default Brand
