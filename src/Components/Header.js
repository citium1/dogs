import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section className="header-section sticky">
            <nav className="navigation">
                <div className="logo">
                <Link to="/"><h1>Imaginary Kennel</h1></Link>
                </div>
                <div className="menu-container">
                    <div className="toggle">
                        <h2><i className="fa-solid fa-bars hamburger " id="hamburger" onClick="toggle()"></i></h2>
                    </div>
                    <ul className="menu hide" id="menu">
                        <li className="menu-item" >
                            <Link to="/">Home</Link>
                        </li>
                        <li className="menu-item" >
                            <Link to="om">About</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="hundar">Our dogs</Link>
                        </li>
                        <li className="menu-item">
                        <Link to="valpar">Litters</Link>
                        </li>
                        <li className="menu-item"> 
                        <Link to="blogg">Blog</Link></li>
                    </ul>

                </div>
            </nav>
        </section>
    );
}

export default Header;