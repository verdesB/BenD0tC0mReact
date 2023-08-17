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
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header