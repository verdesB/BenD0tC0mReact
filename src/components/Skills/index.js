import html from "../../assets/icon/html.svg"
import css from "../../assets/icon/css.svg"
import javascript from "../../assets/icon/javascript.svg"
import sass from "../../assets/icon/sass.svg"
import npm from "../../assets/icon/npm.svg"
import node from "../../assets/icon/node.svg"
import express from "../../assets/icon/express.svg"
import react from "../../assets/icon/react.svg"
import postgre from "../../assets/icon/postgreSQL.svg"
import './skills.scss'












const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills__text">
                <h2>Skills</h2>
                <h3>Be unique</h3>
            </div>
            <div class="skills__layout">
            <div className="skills__technos" >
                <img src={html}></img>
                <h3>Html</h3>
            <p>voila ce que je sais faire en html</p>
            </div>

            <div className="skills__technos">
                <img src={css}></img>
                   <h3>Html</h3>
            <p>voila ce que je sais faire en html</p>
                </div>
            <div className="skills__technos">
                <img src={sass}></img>
                   <h3>Html</h3>
            <p>voila ce que je sais faire en html</p>
                </div>
            <div className="skills__technos">
                <img src={npm}></img>
                   <h3>Html</h3>
            <p>voila ce que je sais faire en html</p>
                </div>
            <div className="skills__technos">
                <img src={javascript}></img>
                   <h3>Html</h3>
            <p>voila ce que je sais faire en html</p>
                </div>
            <div className="skills__technos">
                <img src={node}></img>
                   <h3>Html</h3>
            <p>voila ce que je sais faire en html</p>
                </div>
            <div className="skills__technos">
                <img src={express}></img>
                   <h3>Html</h3>
            <p>voila ce que je sais faire en html</p>
                </div>
            <div className="skills__technos">
                <img src={react}></img>
                   <h3>Html</h3>
            <p>voila ce que je sais faire en html</p>
                </div>
            <div className="skills__technos">
                <img src={postgre}></img>
                   <h3>Html</h3>
            <p>voila ce que je sais faire en html</p>
                </div>
            
            </div>
        </section>
    )
}
export default Skills