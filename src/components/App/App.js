import Header from "../Header"
import Home from "../Home"
import About from "../About"
import Services from "../Services"
import Contact from "../Contact"
import './global.scss'

const App = () => {
    return(
        <>
        <Header/>
        <main>
            <Home/>
            <About/>
            <Services/>
            <Contact/>


        </main> 
        
        </>
        
    )
}
export default App