
const Form = () => {
    return <>
            <div className="form" >
                    <h4>Contact form</h4>
                    <p className="form-info">Fill out the form and we will contact you!</p>
                    <form > 
                        <label for="namn">Name:</label><br />
                        <input type="text" id="namn" name="name" value="John Doe" onfocus="focusFunction(this)" /><br/>
                        <label for="email">Email:</label><br />
                        <input type="email" id="email" name="email" value="info@info.com" onfocus="focusFunction(this)" /><br/>
                        <label for="tel">Phone:</label><br />
                        <input type="tel" id="tel" name="tel" value="+46 123 456 78" onfocus="focusFunction(this)"/><br/><br/>
                        <input id="button" type="submit" value="OK!" />
                    </form>
                </div>
    </>;
}

export default Form;