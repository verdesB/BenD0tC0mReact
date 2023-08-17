import './contact.scss'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact__socials">
                <ul>
                    <li><a><img></img></a></li>
                    <li><a><img></img></a></li>
                </ul>

            </div>
            <div className="contact__form">
                <form>
                    <label for="name">Nom:</label>
                        <input type="text" id="name" name="name"></input>
                            <label for="surname">Prénom:</label>
                                <input type="text" id="surname" name="surname"></input>
                                    <label for="mail">Adresse e-mail:</label>
                                        <input type="email" id="mail" name="mail"></input>
                                            <label for="message">Message:</label>
                                                <textarea id="message" name="message"></textarea>
                                                    <input type="submit" value="Envoyer"></input>
                                                    </form>
                                                </div>


                                                </section>
                                                )
}
export default Contact