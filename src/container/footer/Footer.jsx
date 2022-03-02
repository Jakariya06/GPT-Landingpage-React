import React from 'react'
import './footer.css';
import logoFT from '../../assets/logo.svg';


const Footer = () => {
    return (
        <div className='footer section__padding'>
            <div className="ft-heading">
                <h1 className="gradient__text"> Do you want to step in to the future before others </h1>
            </div>
            <div className="ft-btn">
                <p>Request Early Access</p>
            </div>

            <div className="ft-links">
                <div className="ft-links_logo">
                    <img src={logoFT} alt=''/>
                    <p> Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved </p>
                </div>

                <div className="ft-links_list">
                    <h4> Links </h4>
                    <p> Overons </p>
                    <p> Social Media </p>
                    <p> Counters </p>
                    <p> Contact </p>
                </div>

                <div className="ft-links_list">
                    <h4> Company </h4>
                    <p> Terms & Conditions </p>
                    <p> Privacy Policy </p>
                    <p> Contact </p>
                </div>

                <div className="ft-links_list">
                    <h4> Get in touch </h4>
                    <p> Crechterwoord K12 182 DK Alknjkcb </p>
                    <p> 085-132567 </p>
                    <p> info@payme.net </p>
                </div>
            </div>

            <div className="ft-cpr">
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
