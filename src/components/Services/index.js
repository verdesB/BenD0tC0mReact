import './services.scss'
import iconeCode from '../../assets/icon/code.svg'

const Services = () => {
    return (
        <section className='services' id='services'>
            <div className='services__text'>
                <h2>My Services</h2>
                <h4>Work with pleasure only</h4>

            </div>

            <div className='services__container'>

                <article className='services__box'>
                    <img src={iconeCode}></img>
                    <h3>Web Developper</h3>
                    <p>Conception d'applications web , en mobile first , responsive,
                    </p>
                    <button href="#" className="services__btn">Read More</button>
                </article>

                <article className='services__box'>
                    <img src={iconeCode}></img>
                    <h3>Web Developper</h3>
                    <p>Conception d'applications web , en mobile first , responsive,
                    </p>
                    <button href="#" className="services__btn">Read More</button>
                </article>

                <article className='services__box'>
                    <img src={iconeCode}></img>
                    <h3>Web Developper</h3>
                    <p>Conception d'applications web , en mobile first , responsive,
                    </p>
                    <button href="#" className="services__btn">Read More</button>
                </article>
            </div>
        </section>
    )
}
export default Services