import news1 from '../Content/images/news1.webp';
import news2 from '../Content/images/news2.webp';
import news3 from '../Content/images/news3.webp';


function News() {
    return <section className="news-section">
        <div className="container">

            <div className="news-intro">
                <h2>News about our dogs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, provident sed obcaecati consectetur reiciendis voluptatum nesciunt doloremque iure quasi est nihil. Beatae, mollitia aut laboriosam nihil est porro possimus magni!</p>
            </div>

            <div className="articles">

                {/*  Article 1 */}
                <div className="news-article" id='article'>
                    <img src={news1} alt="news-img" />
                    <article>
                        <h3>Article 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugiat molestias eos! Expedita sunt sapiente non, tempora veniam voluptas dolores ex a eum adipisci vel, doloribus quisquam. Fugit pariatur sed dolor, corporis debitis aliquam totam praesentium adipisci exercitationem officia minima!</p>
                    </article>
                    <a href='/' className="prev" >&#10094;</a>
                    <a href='/' className="next" >&#10095;</a>    
                </div>
                {/* Article 2 */}
                {/* <div className="news-article">
                    <img src={news2} alt="news-img" />
                    <article>
                        <h3>Article 2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugiat molestias eos! Expedita sunt sapiente non, tempora veniam voluptas dolores ex a eum adipisci vel, doloribus quisquam. Fugit pariatur sed dolor, corporis debitis aliquam totam praesentium adipisci exercitationem officia minima!</p>
                    </article>
                </div> */}
                {/* Article 3 */}
                {/* <div className="news-article">
                    <img src={news3} alt="news-img" />
                    <article>
                        <h3>Article 3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugiat molestias eos! Expedita sunt sapiente non, tempora veniam voluptas dolores ex a eum adipisci vel, doloribus quisquam. Fugit pariatur sed dolor, corporis debitis aliquam totam praesentium adipisci exercitationem officia minima!</p>
                    </article>
                </div> */}
            </div>

            <div className="dots">
                <span className="dot" ></span>
                <span className="dot" ></span>
                <span className="dot" ></span>
                <span className="dot" ></span>
            </div>
        </div> 

    </section>;
}


export default News;