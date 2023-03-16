import hero from '../Content/images/hero.jpeg'

const Hero = () => {

    return <div className="hero-section">
    <div className="hero-container">
        <img src={hero} alt="hero-image" /> 
    </div>
    </div>;  

}



export default Hero;