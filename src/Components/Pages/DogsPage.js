import Date from '../Date';
import Dogs from '../Dogs';
import hund4 from '../../Content/images/hund4.webp';

const DogsPage = () => {
    return <div className="dogs-page">

        <div className="hero-section">
            <div className="hero-container hundar-hero">
                <img src={hund4} alt="" />
            </div>
        </div>

        <Date />

        <section className="vara-hundar-section">
        <Dogs />
        </section>
    </div>;
}

export default DogsPage;