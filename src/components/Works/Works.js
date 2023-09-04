import './works.scss'

const Works = ({works}) => {
    return (
        <section className='works' id='works'>
            <div className='works__title'>
                <h2>Works</h2>
                <h3>it's not enough</h3>
            </div>
            <div className='works__projects'>

                 {works.map((work) => (
                    <article className='works__item'>
                    <div className='works__framebox'>
                        <iframe src={work.src}></iframe>
                    </div>


                    <h3>{work.title}</h3>
                    <p>{work.description}</p>
                    <a href={work.src} target="_blank">
                        Visit
                    </a>
                </article>

                 ))}
            
            </div>
        </section>
    )
}
export default Works