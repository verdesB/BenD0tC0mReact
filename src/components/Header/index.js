import './header.scss'

const Header = () => {
    return(
        <header className="header">
            <nav className='header__nav'>
                <h2 className='header__logo'>Portfolio</h2>
                <div className='menu'></div>
                <ul className='header__list'>
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