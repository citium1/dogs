import hund2 from '../Content/images/hund2.webp';

const Dogs = () => {
    return <>
        <div className="hundar">
            <div className="hund" id="hund1">
                <article>
                    <div className="hund-text">
                        <h3>Dog 1</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptatem iste a animi esse enim dolore, cum ipsam reiciendis ducimus maiores dicta numquam porro qui? Consequatur numquam laboriosam at explicabo libero reprehenderit cupiditate accusamus eveniet doloremque sit aut officia esse incidunt omnis fugit perspiciatis magnam, minima culpa maiores. <br /> <br /> Laboriosam, vitae? Aspernatur reiciendis earum vitae! Cum, numquam odit? Esse neque sit, repudiandae quo adipisci dolores enim laborum impedit! Tempora nulla porro sit, excepturi dolorem tenetur fuga eveniet magnam tempore, magni neque expedita ducimus. Voluptas sequi cupiditate minus est, ducimus facere nemo.</p>
                        <ul className="hund-lista">
                            <h5>Merits</h5>
                            <li>Lorem</li>
                            <li>Ipsum</li>
                            <li>Dolor</li>
                            <li>Sit</li>
                        </ul>
                    </div>
                    <img src={hund2} alt="hund-img" />
                </article>
            </div>
            <div className="hund" id="hund2">
                <article><div className="hund-text">
                    <h3>Dog 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aspernatur obcaecati eligendi in, veritatis aut temporibus sint recusandae minus ipsam iure ea, officiis non. Odio nobis veritatis at dolores dicta deleniti voluptatum cumque atque. <br /><br />Suscipit officiis debitis saepe temporibus provident ipsum, nisi magni ducimus minima, natus eligendi magnam. Iste nemo non officiis nihil placeat cumque dolorum mollitia nam voluptas recusandae! Nisi, fuga mollitia! Tempore voluptates illo porro at quaerat adipisci molestias iusto deserunt voluptatem est rerum, mollitia hic ex.<br /> <br />Impedit expedita sapiente odio ab placeat, perspiciatis, nemo eius, recusandae sequi nisi sed quidem fugit magnam saepe obcaecati doloremque cupiditate perferendis excepturi. Rerum tempore nam natus vel, aliquid quam unde cumque, ab nostrum corrupti obcaecati accusantium, delectus tempora quaerat incidunt ullam laborum autem iste quia at?</p>
                    <ul className="hund-lista">
                        <h5>Mertis</h5>
                        <li>consectetur</li>
                        <li>adipisicing</li>
                        <li>aspernatur</li>
                    </ul>
                </div>
                    <img className="hund-col" src={hund2} alt="hund-img" />
                </article>
            </div>
        </div>

    </>;
}

export default Dogs;