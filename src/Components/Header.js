import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section className="header-section sticky">
            <nav className="navigation">
                <div className="logo">
                <Link to="/"><h1>Gråsidingens Kennel</h1></Link>
                </div>
                <div className="menu-container">
                    <div className="toggle">
                        <h2><i className="fa-solid fa-bars hamburger " id="hamburger" onClick="toggle()"></i></h2>
                    </div>
                    <ul className="menu hide" id="menu">
                        <li className="menu-item" >
                            <Link to="/">Hem</Link>
                        </li>
                        <li className="menu-item" >
                            <Link to="om">Om oss</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="hundar">Våra hundar</Link>
                        </li>
                        <li className="menu-item">
                        <Link to="valpar">Valpkullar</Link>
                        </li>
                        <li className="menu-item"> 
                        <Link to="blogg">Blogg</Link></li>
                    </ul>

                </div>
            </nav>
        </section>
    );
}



export default Header;