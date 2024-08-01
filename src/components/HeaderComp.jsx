import React from 'react';
import avatar from "../assets/images/photo.jpeg";
import { FacebookOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined, MessageOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Contact from './Contact';

const HeaderComp = () => {
    return (
        <header>
            <div className='left'>
                <a href="http://localhost:5173">
                    <img src= {avatar} alt='user'/>
                </a>
                <div className='user-infos'>
                    <h1>Nataël Ozturk</h1>
                    <h3>Etudiant Epitech</h3>
                    <div className='contacts'>
                        <div className='contacts-item'>
                            <a href="https://www.linkedin.com/in/natael-ozturk-b32921301/">
                                <Button icon={<LinkedinOutlined/>}></Button>
                            </a>
                        </div>
                        <div className='contacts-item'>
                            <a href="https://github.com/OZTURK3466">
                                <Button icon={<GithubOutlined/>}></Button>
                            </a>
                        </div>
                        <div className='contacts-item'>
                            <a href="https://www.facebook.com/natael.ozturk">
                                <Button icon={<FacebookOutlined/>}></Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right'>
                <a href="./contact">
                    <Button className='contact-btn' icon={<MessageOutlined/>}>Contactez-Moi</Button>
                </a>
            </div>
        </header>
    )
}

export default HeaderComp;
