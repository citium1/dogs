import Date from './Date'
import Form from './Form'
import aboutImg from '../Content/images/om.jpeg';


const About = () => {
    return <div className='about-page'>

                <div className="about" >
                <Date />
                    <div className="btns">
                        <button className="hide-btn">Göm</button>
                        <button className="show-btn">Visa</button>
                </div>

                <div className="about-us">
                    <div className="about-info">
                        <div className="about-txt">
                            <h3>Om oss</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque quis culpa dolorem
                                voluptas
                                in voluptatibus perferendis illum id esse distinctio, veniam eligendi ab, vel libero
                                fuga
                                repudiandae quod nulla ipsa beatae velit sapiente deleniti repellendus officia? Veniam
                                fuga
                                molestias fugit corporis, dolor ex sed quae? Quaerat, magni excepturi<br/><br/> repellat
                                deserunt
                                quam adipisci aliquam nihil soluta. Maxime neque voluptatibus consequuntur vitae minus
                                consectetur tempore, modi natus cumque atque fuga autem sequi ipsam excepturi non
                                repudiandae,
                                officia est. Doloribus a excepturi, labore pariatur quod repellendus enim veritatis non
                                eveniet
                                dolorum cum consequuntur necessitatibus architecto sint, perferendis rerum sit tenetur
                                ducimus.
                            </p>
                        </div>
                        <img src={aboutImg} alt="om-img" />
                    </div>

                    
                    <div className="table">
                        <h4 id="snabbfakta">Snabbfakta om oss</h4>
                        <table id="snabbfakta">
                            <tr>
                                <th>Påstående </th>
                                <th>Ja</th>
                                <th>Nej</th>
                            </tr>
                            <tr>
                                <td>Lorem Ipsum</td>
                                <td>X</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Lorem Ipsum</td>
                                <td> </td>
                                <td>X</td>
                            </tr>
                            <tr>
                                <td>Lorem Ipsum</td>
                                <td> </td>
                                <td>X</td>
                            </tr>
                            <tr>
                                <td>Lorem Ipsum</td>
                                <td>X</td>
                                <td> </td>
                            </tr>
                            <tr>
                                <td>Lorem Ipsum</td>
                                <td>X</td>
                                <td> </td>
                            </tr>
                        </table>
                    </div>
                    
                    <div className="contact">
                        <div className="contact-details">
                            <h3>Kontakta oss</h3>

                            <div className="info">
                                <h4>Kontaktuppgifter</h4>
                                <p className="name">Jane Doe</p>
                                <div className="tel">
                                    <p>Tel: <a href="tel:123-456-7890"> 123-456-7890</a></p>
                                </div>
                                <div className="mail">
                                    <p>Email: <a href="mail:info@info.com">info@grasidingens.com</a></p>
                                </div>
                                <p className="address">Adress: Vårfrukyrka Viggeby 17,<br />
                                    745 91 Enköping</p>
                            </div>
                        </div>
                    </div>
                </div>

                    <Form />
                
            </div>
    </div>;

}


export default About;