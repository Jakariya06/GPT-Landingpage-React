import React from 'react'
import './App.css'
import {CTA, Brand, Navbar} from './component';
import {Blog, Footer, Features, Header, Possibility, What} from './container'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar/>
                <Header/>
            </div>
            <Brand />
            <What/>
            <Features/>
            <Possibility/>
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
