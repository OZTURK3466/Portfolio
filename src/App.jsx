import { Button, Divider } from "antd";
import "./App.css";
import HeaderComp from "./components/HeaderComp";
import {GithubOutlined, LikeOutlined, LinkOutlined} from "@ant-design/icons";
import {experience, projects} from "./data/data";
import AsideComp from "./components/AsideComp";
import Contact from "./components/Contact";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function MainPage() {
  return <>
  <div className="main">
    <HeaderComp/>

    <div className="body-container">
      
      <div className="left">
      <section>
        <article>
          <h2>A propos de moi</h2>
          <p>
            Bonjour, je m'appelle Nataël, je suis passionné par le monde de la programmation et je suis actuellement apprenti développeur en première année à l'école Epitech, où je me spécialise dans le langage C. Depuis mon plus jeune âge, j'ai été fasciné par la manière dont les ordinateurs peuvent résoudre des problèmes complexes et apporter des solutions innovantes.
            Mon parcours académique m'a conduit à choisir Epitech pour sa pédagogie unique axée sur le projet et le développement des compétences pratiques. J'ai été attiré par le défi constant de résoudre des problèmes concrets et de repousser mes limites intellectuelles dans un environnement stimulant.
            Au cours de mon parcours, j'ai eu l'occasion de travailler sur divers projets, allant de petits exercices de programmation à des applications plus complexes. Chaque projet m'a permis d'approfondir ma compréhension du langage C et d'acquérir de nouvelles compétences techniques. J'ai également appris à collaborer efficacement avec mes pairs, à gérer les délais et à prendre des décisions éclairées pour atteindre les objectifs fixés.
            
          </p>
        </article>
      </section>

      <section className="projects">
        <h2>Mes projets</h2>
        
        <article>
        <img className="featured-img" src="https://cdn.futura-sciences.com/sources/images/actu/google-images-rechercher.jpg"
        alt="slug"/>
        <div className="project-info">
          <h3>Mon Github</h3>
          <p>Vous pouvez retrouver tous mes projets sur mon Github en cliquant sur le lien juste en dessous</p>
          <div className="btn-link">
            <a href="https://github.com/OZTURK3466">
              <Button className="btn" icon={<GithubOutlined/>}>Github</Button>
            </a>
          </div>
        </div>
        </article>

        <Divider style={{backgroundColor: "#ffffff"}}/>
        {
          projects.map((item)=> {
            return(<article className="article-item" key = {item.id}>
            <div className="left">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="right">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Button type="link" icon= {<GithubOutlined/>}>Github</Button>
            </div>
          </article>);
          })
        }
      </section>

      <section className="experiences">
          <h2>Expérience professionnelle</h2>
          {experience.map((item)=>{
              return(<article key = {item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>);
            })}
        </section>

      </div>

      <AsideComp/>
    </div>

    <footer>
      <p>Conçu avec la librairie React.JS par Nataël Ozturk, ALL Right Reserved &copy; 2024</p>
    </footer>
  </div>
  </>;
}

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </BrowserRouter>
  
}

export default App;
