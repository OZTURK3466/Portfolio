import { Button, Divider } from "antd";
import "./Contact.css";
import HeaderComp from "./HeaderComp";
import {GithubOutlined, LikeOutlined, LinkOutlined} from "@ant-design/icons";
import {experience, projects} from "../data/data";



function Contact() {
  return <>
  <div className="main">
    <HeaderComp/>
    <div className="contact">
        <form name="contact" method="post" className="contact__form">
            <label htmlFor="name">Nom:</label>
            <input type="text" name="name" />

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" />

            <label htmlFor="message">Message:</label>
            <textarea name="message"></textarea>
            <button type="submit">Envoyer</button>
        </form>
    </div>
    <footer>
      <p>Conçu avec la librairie React.JS par Nataël Ozturk, ALL Right Reserved &copy; 2024</p>
    </footer>
  </div>
  </>;
}

export default Contact;
