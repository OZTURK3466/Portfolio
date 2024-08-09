import React from "react"
import { EnvironmentOutlined, GithubOutlined, LikeOutlined, LinkOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

import {educations, experience, projects} from "../data/data";
import { Button } from "antd";
const AsideComp = () => {
    return (
        <>
        <aside>
        <div className="contacts section">
          <div className="contact-item">
            <EnvironmentOutlined/>
            <span>Montpellier</span>
          </div>
          <div className="contact-item">
            <MailOutlined/>
            <span><a href="mailto:nataelozturk@icloud.com">nataelozturk@icloud.com</a></span>
          </div>
          <div className="contact-item">
            <PhoneOutlined/>
            <span>06 52 71 82 33</span>
          </div>
        </div>

        <div className="skills section">
          <h2>Compétences</h2>
            <div className="skills-list">
              <div className="skill-item">
                <span>Langage C</span>
                <div className="full">
                  <div className="percent first"></div>
                </div>
              </div>
              <div className="skill-item">
                <span>HTML && CSS</span>
                <div className="full">
                  <div className="percent second"></div>
                </div>
              </div>
              <div className="skill-item">
                <span>Python</span>
                <div className="full">
                  <div className="percent third"></div>
                </div>
              </div>
            </div>
            <a href="https://github.com/EpitechPromo2028">
              <Button type="link" icon={<LinkOutlined/>}>En savoir plus sur Github</Button>
              </a>
        </div>
        <div className="section">
          <h2>Centre d'intérêt</h2>
          <p>En dehors du développement informatique, je suis passionné par le sport, notammant par la musculation et le football. Je suis également passionné par les voiture, surtout les sportives.
</p>
        </div>
        <div className="section">
          <h2>Education</h2>
          {
            educations.map((item) =>{
              return(<div className="education-item" key={item.id}>
              <h3>{item.title}</h3>
              <span>{item.name}</span>
            </div>);
            })
          }
        </div>
        <div className="section">
          <h2>Langues</h2>
          <div className="language-item">
            <h3>Français</h3>
            <span>Langue maternelle</span>
            <div className="full">
              <div className="percent five"></div>
            </div>
          </div>
          <div className="language-item">
            <h3>Anglais</h3>
            <span>Intermédiaire</span>
            <div className="full">
              <div className="percent six"></div>
            </div>
          </div>
          <div className="language-item">
            <h3>Turque</h3>
            <span>Langue maternelle</span>
            <div className="full">
              <div className="percent seven"></div>
            </div>
          </div>
        </div>
      </aside>
        </>
    )
}

export default AsideComp