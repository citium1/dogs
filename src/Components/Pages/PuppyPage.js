import Date from '../Date';
import valpHero from '../../Content/images/valp-hero.jpeg';
import valp1 from '../../Content/images/valp1.jpeg';
import valp2 from '../../Content/images/valp2.jpeg';
import valp3 from '../../Content/images/valp3.jpeg';


const PuppyPage = () => {
    return <div className='puppy-page'>

        <div className="hero-section">
            <div className="hero-container">
                <img src={valpHero} alt="hero" />
            </div>
        </div>
        <Date />

        <section className="valp-section">
            
                <div className="valpar">

                    <div className="valp-info">
                    <h2>Kommande Valpkullar</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, provident sed obcaecati
                        consectetur reiciendis voluptatum nesciunt doloremque iure quasi est nihil. Beatae, mollitia aut
                        laboriosam nihil est porro possimus magni!</p>
                        </div> 

                    <div className="valpkull">
                        <article>
                            <div className="valp-text">
                                <h3>Våra valpkullar</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptatem iste a
                                    animi esse enim dolore, cum ipsam reiciendis ducimus maiores dicta numquam porro
                                    qui? Consequatur numquam laboriosam at explicabo libero reprehenderit cupiditate
                                    accusamus eveniet doloremque sit aut officia esse incidunt omnis fugit perspiciatis
                                    magnam, minima culpa maiores.
                                    <br/> <br/>
                                </p>

                                <h4>Valpkull 1</h4>
                                <p>Laboriosam, vitae? Aspernatur reiciendis earum vitae! Cum, numquam odit? Esse neque
                                    sit, repudiandae quo adipisci dolores enim laborum impedit! Tempora nulla porro sit,
                                    excepturi dolorem tenetur fuga eveniet magnam tempore, magni neque expedita ducimus.
                                    Voluptas sequi cupiditate minus est, ducimus facere nemo.<br/> <br/> </p>

                                <h4>Valpkull 2</h4>
                                <p id="valp-bred">Laboriosam, vitae? Aspernatur reiciendis earum vitae! Cum, numquam
                                    odit? Esse neque sit, repudiandae quo adipisci dolores enim laborum impedit! Tempora
                                    nulla porro sit, excepturi dolorem tenetur fuga eveniet magnam tempore, magni neque
                                    expedita ducimus. Voluptas sequi cupiditate minus est, ducimus facere nemo.</p>

                            </div>
                            <img src={valp1} alt="hund-img" />
                        </article>
                    </div>

                    <div className="valp-info">
                        <h2>Tidigare Valpkullar</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, provident sed obcaecati
                            consectetur reiciendis voluptatum nesciunt doloremque iure quasi est nihil. Beatae, mollitia
                            aut laboriosam nihil est porro possimus magni!</p>
                    </div>

                    <iframe width="700" height="455" src="https://www.youtube.com/embed/EmLVA7UK99s?controls=0"
                        title="video" frameborder="0" allow="autoplay;" allowfullscreen></iframe>

                    <div className="valpkull">
                        <article>
                            <img src={valp2} alt="hund-img" />
                            <div className="valp-text">
                                <h3>B-Kull</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptatem iste a
                                    animi esse enim dolore, cum ipsam reiciendis ducimus maiores dicta numquam porro
                                    qui? Consequatur numquam laboriosam at explicabo libero reprehenderit cupiditate
                                    accusamus eveniet doloremque sit aut officia esse incidunt omnis fugit perspiciatis
                                    magnam, minima culpa maiores.
                                    <br/> <br/>
                                </p>
                                <h5>Tik:</h5>
                                <a href="./hundar.html#hund2">Hund 2</a>
                                <h5>Hane:</h5>
                                <a href="https://www.google.com/" target="_blank">Hund X</a>
                            </div>

                        </article>
                    </div>

                    <div className="valpkull">
                        <article>
                            <div className="valp-text">
                                <h3>A-Kull</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptatem iste a
                                    animi esse enim dolore, cum ipsam reiciendis ducimus maiores dicta numquam porro
                                    qui? Consequatur numquam laboriosam at explicabo libero reprehenderit cupiditate
                                    accusamus eveniet doloremque sit aut officia esse incidunt omnis fugit perspiciatis
                                    magnam, minima culpa maiores.
                                    <br/> <br/>
                                </p>
                                <h5>Tik:</h5>
                                <a href="./hundar.html#hund1">Hund 1</a>
                                <h5>Hane:</h5>
                                <a href="https://www.google.com/" target="_blank">Hund X</a>
                            </div>
                            <img src={valp3} alt="hund-img"/>
                        </article>
                    </div>
                </div>
        </section>
    </div>;
}



export default PuppyPage;