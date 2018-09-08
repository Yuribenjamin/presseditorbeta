import React from 'react'
import global from './global.svg'
const Header = () => (
    <div className='App'>
        <header className='App-header'>
            <h1 className='App-title'>Press Editor</h1>
            {/* Logo from https://www.flaticon.com/ */}
            <img src={global} id='App-logo' alt='App-Logo'/>
        </header>
    </div>
);

export default Header