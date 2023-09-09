import github from '../../assets/icon/github.svg'
import linkedin from'../../assets/icon/linkedin.svg'
import './socials.scss'

const Socials = () => {
    return(
        <div className="contact__socials">
                <ul>
                    <li><a href='#'><img src={github}></img></a></li>
                    <li><a href='#'><img src={linkedin}></img></a></li>
                </ul>

            </div>
    )
}
export default Socials