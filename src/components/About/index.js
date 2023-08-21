import './about.scss'
import image from '../../assets/icon/ben2.png'

const About = () => {
    return(
        <section className="about" id='about'>
            <div className="about__img">
                <img src={image} alt=""></img>
            </div>
            <div className="about__text">
                <h2>About Me</h2>
                <h5>Je suis développeur web polyvalents, et très creatif </h5>
                <p>Je suis un développeur web fullstack passionné et ingénieux, capable de m’adapter rapidement à de nouveaux environnements et défis grâce à mes compétences en soft skills. Je suis capable de concevoir, développer et maintenir des applications web en utilisant une variété de technologies et de langages de programmation. Mon expertise en développement front-end et back-end me permet de créer des expériences utilisateur fluides et engageantes tout en garantissant la stabilité et la sécurité des applications. Je suis constamment à la recherche de nouveaux défis pour améliorer mes compétences et contribuer à des projets passionnants.</p>
                <button className='about__btn'>Hire Me </button>
            </div>
        </section>
    )
}

export default About