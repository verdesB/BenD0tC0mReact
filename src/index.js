import {createRoot} from "react-dom"
import App from "./components/App/App"

const container = document.getElementById("app")

const root = createRoot(container)

root.render(<App/>)