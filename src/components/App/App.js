import Header from "../Header"
import Home from "../Home"
import About from "../About"
import Services from "../Services"
import Contact from "../Contact"
import Skills from "../Skills"
import './mixin.scss'
import './global.scss'

const App = () => {
    return(
        <>
        <Header/>
        <main>
            <Home/>
            <About/>
            <Services/>
            <Skills/>
            <Contact/>


        </main> 
        
        </>
        
    )
}
export default App