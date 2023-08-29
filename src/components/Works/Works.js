import './works.scss'

const Works = () => {
    return (
        <section className='works' id='works'>
            <div className='works__title'>
                <h2>Works</h2>
                <h3>it's not enough</h3>
            </div>
            <div className='works__projects'>
                <article className='works__item'>
                    <div className='works__framebox'>
                        <iframe src="https://dash-board-react-eight.vercel.app/"></iframe>
                    </div>


                    <h3>DashBoard</h3>
                    <p>Petit projet ....</p>
                    <button href='#' >
                        Visit
                    </button>
                </article>
                <article className='works__item'>
                    <div className='works__framebox'>
                        <iframe src="https://react-components-todolist-5182xwl7e-verdesb.vercel.app/"></iframe>
                    </div>


                    <h3>Todo list</h3>
                    <p>Petit projet ....</p>
                    <button href='#' >
                        Visit
                    </button>
                </article>
                <article className='works__item'>
                    <div className='works__framebox'>
                        <iframe src="https://dash-board-react-eight.vercel.app/"></iframe>
                    </div>


                    <h3>DashBoard</h3>
                    <p>Petit projet ....</p>
                    <button href='#' >
                        Visit
                    </button>
                </article>

                

            </div>
        </section>
    )
}
export default Works