import './contact.scss';
import github from '../../assets/icon/Github.svg';
import linkedin from '../../assets/icon/Linkedin.svg';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className='contact__title'>
                <h2>Contact Me</h2>
                <h4>I won't bite</h4>
            </div>
            <div className='contact__container'>
            <div className="contact__socials">
                <ul>
                    <li><a href='#'><img src={github}></img></a></li>
                    <li><a href='#'><img src={linkedin}></img></a></li>
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
                                                <textarea rows={10} cols={17} id="message" name="message"></textarea>
                                                    <input type="submit" value="Envoyer"></input>
                                                    </form>
                                                </div>
                                                </div>


                                                </section>
                                                )
}
export default Contact