
const Footer = () => {
    return <footer className="footer">
    <div className="footer-container">
        <div className="footer-section">
            <div className="footer-logo">
                <h3> <a href="#"> Gråsidingens </a></h3>
            </div>
        
            <div className="footer-media">
                <h2><a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-square-facebook"></i></a></h2>
                <h2><a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a></h2>
                <h2><a href="https://www.youtube.com/" target="_blank"><i className="fa-brands fa-youtube"></i></a></h2>
            </div>
        </div>
        <div className="footer-divider"></div>
        <p className="footer-copy">
            © Gråsidingens Kennel AB
        </p>
    </div>
</footer>;
}


export default Footer;