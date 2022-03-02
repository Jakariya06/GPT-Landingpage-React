import React from 'react';
import {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg' 
import './navbar.css';

const Menu = () => (
    <>
    <p> <a href="#home"> Home </a> </p>
    <p> <a href="#what"> What is GPT? </a> </p>
    <p> <a href="#poss"> Open AI </a> </p>
    <p> <a href="#features"> Case Studies </a> </p>
    <p> <a href="#blog"> Library </a> </p>
    </>
)

const Navbar = () => {

    const[toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className='nav'>
            <div className="nav-links">
                <div className="nav-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav-links_ctn">
                    <Menu/>
                </div>             
            </div>

            <div className="nav-sign">
                    <p>Sign In</p>
                    <button type='button'>Sign Up</button>
            </div>

                <div className="nav-menu">
                    {
                        toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={ ()=> setToggleMenu(false)} />
                        : <RiMenu3Line color="#fff" size={27} onClick={ ()=> setToggleMenu(true)} />
                    }
                    {
                        toggleMenu &&(
                            <div className="nav-menu_ctn scale-up-center">
                                <div className="nav-menu_ctn-links">
                                    <Menu />
                                    <div className="nav-menu_ctn-links-sign">
                                            <p>Sign In</p>
                                            <button type='button'>Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
        </div>
    )
}

export default Navbar
