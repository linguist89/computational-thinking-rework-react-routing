import HeaderLogo from './static/images/chcaa_logo.png';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={HeaderLogo} alt="Logo" className="logo" />
            </div>
            <div className="buttons-container">
                <button className="header-button">About</button>
                <button className="header-button">Contact</button>
            </div>
        </header>
    )
};

export default Header;