import React from 'react'
import DropDownSearch from './DropDownSearch'

const Header: React.FC = () => {
    return(
    <header className='header'>
        <h1 className='header--main'>Explore <span className='header--main-span'>the Hague!</span></h1>
        <p className='header--sub'>
        Welcome to the browser of amazing freetime possibilities! You’re in one of the most beautiful cities of the Netherlands. 
        </p>

        <p>Let’s do something fun!</p>
        
        <div className='header--cta'>
            <h3>Are you in the mood for... <DropDownSearch/>?</h3>
        </div>
    </header>
    )
}

export default Header;