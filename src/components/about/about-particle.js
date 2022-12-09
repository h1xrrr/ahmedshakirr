import React from 'react'
import Image from 'next/image'
import ProgressBar from '../progressBar';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const circleProgressData = [
    { language: 'English', progress: 95 },
    { language: 'Arabic', progress: 100 },

];

const progressBarData = [
    { bgcolor: "#7d7789", completed: 60, title: 'Administration' },
    { bgcolor: "#7d7789", completed: 85, title: 'Security' },
    { bgcolor: "#7d7789", completed: 90, title: 'Networks' },
];

const services = [
    {
        desc: "Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!.",
        img: "img/testimonials/1.jpg",
        info1: "Alexander Walker",
        info2: "Graphics Designer"

    },
    {
        desc: "I had a little problem and the support was just awesome to quickly solve the situation. And keep going on.",
        img: "img/testimonials/2.jpg",
        info1: "Baraka Clinton",
        info2: "Construction Engineering"

    },
    {
        desc: "These people really know what they are doing! Great customer support availability and supperb kindness.",
        img: "img/testimonials/3.jpg",
        info1: "Armin Van Buuren",
        info2: "Content Manager"

    },
]

export default function AboutDefault({ ActiveIndex }) {
    return (
        <>
            {/* <!-- ABOUT --> */}
            <div className={ActiveIndex === 1 ? "cavani_tm_section active animated flipInX" : "cavani_tm_section active hidden animated flipOutX"} id="about_">
            <div className="section_inner">
                    <div className="cavani_tm_about">
                        <div className="biography">
                            <div className="cavani_tm_title">
                                <span>About Me</span>
                            </div>
                            <div className="wrapper">
                                <div className="left">
                                    <p>Hello there! My name is <strong>Ahmed Shakir.</strong> I am an IT Network Enginner, and I&#39;m very passionate and dedicated to my work.</p>
                                    <p>With alots of experience as a professional an IT Network, I have acquired the skills and knowledge necessary to make your project a success.</p>
                                </div>
                                <div className="right">
                                    <ul>
                                        <li><span className="first">Name:</span><span className="second">Ahmed Shakir</span></li>
                                        <li><span className="first">Address:</span><span className="second">Al-Baladiyat, Baghdad, IQ</span></li>
                                        <li><span className="first">Mail:</span><span className="second"><a href="#">ahmedshakirr@outlook.com</a></span></li>
                                        <li><span className="first">Phone:</span><span className="second">+9647825683468</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="services">
                            <div className="wrapper">
                                <div className="service_list">
                                    <div className="cavani_tm_title">
                                        <span>Services</span>
                                    </div>
                                    <div className="list">
                                        <ul>
                                            <li>LAN/WAN</li>
                                            <li>Security</li>
                                            <li>Wireless Solutions</li>
                                            <li>Virtual Machines & Servers</li>
                                            <li>Network Designs</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="service_list">
                                    <div className="cavani_tm_title">
                                        <span>Interests</span>
                                    </div>
                                    <div className="list">
                                        <ul>
                                            <li>Achievements &amp; Bodybuilding</li>
                                            <li>Video Games &amp; GOOD VIBES </li>
                                            <li>Music &amp; history</li>
                                            <li>Travel &amp; lifestyle</li>
                                            <li>Winter &amp; Rain</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="wrapper">
                                <div className="programming">
                                    <div className="cavani_tm_title">
                                        <span>Skills</span>
                                    </div>
                                    <div className="cavani_progress">
                                        {progressBarData.map((item, idx) => (
                                            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} title={item.title} />
                                        ))}
                                    </div>
                                </div>
                                <div className="language">
                                    <div className="cavani_tm_title">
                                        <span>Skills</span>
                                    </div>
                                    <div className="circular_progress_bar">
                                        <div className='circle_holder'>
                                            {circleProgressData.map((item, idx) => (
                                                <div key={idx}>
                                                    <div className="list_inner">
                                                        <CircularProgressbar                                                           
                                                            value={item.progress}
                                                            text={`${item.progress}%`}
                                                            strokeWidth={3}
                                                            stroke='#7d7789'
                                                            Language={item.language}
                                                            className={"list_inner"}
                                                        />
                                                        <div className="title"><span>{item.language}</span></div>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="resume">
                            <div className="wrapper">
                                <div className="education">
                                    <div className="cavani_tm_title">
                                        <span>Certifactions</span>
                                    </div>
                                    <div className="list">
                                        <div className="univ">
                                            <ul>
                                                <li>
                                                    <div className="list_inner">
                                                        <div className="time">
                                                            <span>2022</span>
                                                        </div>
                                                        <div className="place">
                                                            <h3>MTCNA</h3>
                                                            <span>Mikrotik</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="experience">
                                    <div className="cavani_tm_title">
                                        <span>Experience</span>
                                    </div>
                                    <div className="list">
                                        <div className="univ">
                                            <ul>
                                                <li>
                                                    <div className="list_inner">
                                                        <div className="time">
                                                            <span>2022 - Present</span>
                                                        </div>
                                                        <div className="place">
                                                            <h3>Al-Hayat Scientific Office</h3>
                                                            <span>IT Network Officer</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list_inner">
                                                        <div className="time">
                                                            <span>2021 - 2022</span>
                                                        </div>
                                                        <div className="place">
                                                            <h3>Aracto IT Solutions</h3>
                                                            <span>IT Technacian</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>        
                            </div>
                        </div>
                    </div>
                
           
            {/* <!-- ABOUT --> */}
        </>
    )
}
