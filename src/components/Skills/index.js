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
            <div><img src={html}></img></div>
            <div><img src={css}></img></div>
            <div><img src={sass}></img></div>
            <div><img src={npm}></img></div>
            <div><img src={javascript}></img></div>
            <div><img src={node}></img></div>
            <div><img src={express}></img></div>
            <div><img src={react}></img></div>
            <div><img src={postgre}></img></div>
            
            </div>
        </section>
    )
}
export default Skills