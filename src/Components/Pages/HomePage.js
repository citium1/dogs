import Hero from '../Hero';
import Date from '../Date';
import Action from '../Action';
import News from '../News';


const HomePage = () => {
    return <div className="home-page">
        <Hero />
        <Date />
        <Action />
        <News />
    </div>;
}



export default HomePage;