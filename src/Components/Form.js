
const Form = () => {
    return <>
            <div className="form" >
                    <h4>Kontaktformulär</h4>
                    <p className="form-info">Fyll i formuläret så återkopplar vi till dig!</p>
                    <form > 
                        <label for="namn">Namn:</label><br />
                        <input type="text" id="namn" name="name" value="John Doe" onfocus="focusFunction(this)" /><br/>
                        <label for="email">Email:</label><br />
                        <input type="email" id="email" name="email" value="info@info.com" onfocus="focusFunction(this)" /><br/>
                        <label for="tel">Telefon:</label><br />
                        <input type="tel" id="tel" name="tel" value="+46 123 456 78" onfocus="focusFunction(this)"/><br/><br/>
                        <input id="button" type="submit" value="SKICKA" />
                    </form>
                </div>
    </>;
}

export default Form;