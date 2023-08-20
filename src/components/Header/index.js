import './header.scss'
import menuEvent from './function'
import { useEffect } from 'react'

const Header = () => {

    useEffect(() => {
        menuEvent();
    }, []);
    
    return(
        <header className="header">
            <nav className='header__nav'>
                <h2 className='header__logo'>Portfolio</h2>
                <button className='menu'></button> 
                <ul className='header__list closed'>
                    <li ><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        
    )
    
}
export default Header