import React from 'react'

// style sheet links-------------------

import '../pages/portfolio.css'
import '../pages/about.css'
import './resume.css'
import './project.css'

// home page image-------------------------

import img from '../images/mypic.png'

// about page images-------------------------

import img1 from '../images/grid1.jpg';
import img2 from '../images/grid3.jpg';
import img3 from '../images/grid4.jpg';

// project images-----------------------------

import project1 from '../images/cafe.mp4'
import project2 from '../images/resort.mp4'

// home page icons-----------------------------

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

// resume icons---------------------

import { DiPhotoshop } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

// contact icon-------------------

import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";




const Home = () => {

    return (
        <>
            {/* navbar start------------------------- */}

            <section className='banner'>
                <header>
                    <nav className="navbar navbar-expand-sm navbar-light sticky-top">
                        <div className="container-fluid">
                            <a href="#" className='logo'> Port <span>folio</span></a>
                            <div className="collapse navbar-collapse" id="navbar">
                                <ul className="navbar-nav text-capitalize navigation">
                                    <li><a className="nav-link active" href="#">Home</a></li>
                                    <li><a className="nav-link" href="#about_us">about</a></li>
                                    <li><a className="nav-link" href="#resume">resume</a></li>
                                    <li><a className="nav-link" href="#project">project</a></li>
                                    <li><a className="nav-link" href="#contact">contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="toggle"></div>
                </header>
                <img src={img} alt="my img" className='mypic' />
                <div className="content">
                    <div className="contentbx">
                        <h4>Hello,</h4>
                        <h2> I'm <span>Praveenkumar S</span></h2>
                        <h3>MERN STACK DEVELOPER</h3>
                        <a href="#">Hire Me</a>
                        <a href="#">Download CV</a>
                    </div>
                </div>
                <ul className='sci'>
                    <li> <a href="https://www.facebook.com/login.php/"><FaFacebookF id='fb' /></a> </li>
                    <li> <a href="https://web.whatsapp.com/"><FaWhatsapp id='whts' /></a> </li>
                    <li> <a href="https://www.instagram.com/"><FaInstagram id='insta' /></a> </li>
                    <li> <a href="https://x.com/i/flow/login?lang=en"><FaTwitter id='twt' /></a> </li>
                    <li> <a href="https://www.linkedin.com/login"><FaLinkedinIn id='lin' /></a></li>
                </ul>
                <ul className='menu text-uppercase'>
                    <li><a className="nav-link active" href="#">Home</a></li>
                    <li><a className="nav-link" href="#about_us">about</a></li>
                    <li><a className="nav-link" href="#resume">resume</a></li>
                    <li><a className="nav-link" href="#project">project</a></li>
                    <li><a className="nav-link" href="#contact">contact</a></li>
                </ul>
            </section>

            {/* navbar end------------------------- */}

            {/* about start------------------------- */}

            <section id='about_us'>
                <div className="about row">
                    <div className="aboutcont col-lg-6">
                        <div className="aboutcont1">
                            <h2>About</h2>
                            <h6>praveensomu567@gmail.com</h6>
                            <p>A skilled and motivated MERN STACK DEVELOPER with experience in React, HTML, CSS JavaScript, Bootstrap, Express js , Node js and Mongo DB. Committed to delivering high-quality results and working collaboratively in a friendly and dynamic environment.</p>
                        </div>
                    </div>

                    <div id="maincont2" className="col-lg-6">
                        <div className="container">
                            <div className="card">
                                <img src={img1} alt="img1" />
                            </div>
                            <div className="card">
                                <img src={img2} alt="img2" />
                            </div>
                            <div className="card">
                                <img src={img3} alt="img3" />
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* about end------------------------- */}


            {/* resume start------------------------ */}

            <section >
                <div id='resume'> </div>
                <div id="resone">
                    <div className="row">
                        <div id="resumecont1" className=" resumecont1 col-lg-5">

                            {/* software skil start---------------------- */}

                            <h2>software skill</h2>
                            <div className="row row-col-2">

                                <div id="skill" className="cols">
                                    <h5> <FaHtml5 id="skillicon" /> HTML</h5>
                                    <h5> <FaCss3Alt id="skillicon" /> CSS</h5>
                                    <h5> <FaJs id="skillicon" /> Java Script</h5>
                                    <h5>  <FaReact id="skillicon" />REact js</h5>
                                    <h5>  <FaPython id="skillicon" />Python</h5>
                                    <h5>  <DiPhotoshop id="skillicon" />Photoshop</h5>
                                </div>
                                <div id="progressbox" className="cols">
                                    <div className="probox">
                                        <div className="progress"><div id="html" className="progress-bar">90%</div></div>
                                    </div>

                                    <div className="probox">
                                        <div className="progress"><div id="css" className="progress-bar">90%</div></div>
                                    </div>

                                    <div className="probox">
                                        <div className="progress"><div id="js" className="progress-bar">60%</div></div>
                                    </div>

                                    <div className="probox">
                                        <div className="progress"><div id="react" className="progress-bar">80%</div></div>
                                    </div>

                                    <div className="probox">
                                        <div className="progress"><div id="python" className="progress-bar">40%</div></div>
                                    </div>

                                    <div className="probox">
                                        <div className="progress"><div id="photoshop" className="progress-bar">50%</div></div>
                                    </div>

                                </div>
                            </div>
                            {/* software skil end------------------- */}

                            {/* language start---------------------- */}

                            <h2>Languages</h2>

                            <div id="lang" className="row row-col-2">
                                <div className="language cols">
                                    <h5>tamil</h5>
                                    <h5>English</h5>
                                    
                                </div>
                                <div id="progressbox" className="cols">
                                    <div className="probox">
                                        <div className="progress"><div id="tamil" className="progress-bar">98%</div></div>
                                    </div>

                                    <div className="probox">
                                        <div className="progress"><div id="eng" className="progress-bar">70%</div></div>
                                    </div>

                                    <div className="probox">
                                        <div className="progress"><div id="hindi" className="progress-bar">40%</div></div>
                                    </div>
                                </div>
                            </div>

                            {/* language end-----------------------*/}

                            {/* personal skill start--------------------- */}

                            <h2> personal skill </h2>

                            <div className="personalskill">
                                <h5> Creative - Team work - organisation</h5>
                            </div>
                        </div>

                        {/* personal skill end------------------- */}

                        {/* education start -------------------------*/}
                        <div id="educationcont" className="col-lg-4">
                            <h2>education</h2>

                            <div className="educationbox">
                                <div className="row cols-2">
                                    <div className="smlbox cols">
                                        <h3>.UG</h3>
                                    </div>
                                    <div className="bigbox cols">
                                        <h4>Kaamadhenu Arts & Science Collage,</h4>
                                        <h5>Bharathiar university , Coimbatore.</h5>
                                        <h6>CGPA-7.8%</h6>
                                        <h6>2018 -2021</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="educationbox">
                                <div className="row cols-2">
                                    <div className="smlbox1 cols">
                                        <h3>.XII</h3>
                                    </div>
                                    <div className="bigbox cols">
                                        <h4>K.V.K. Govt Boys Higher Secondary School, Erode.</h4>
                                        <h5>Grade- 74.9%</h5>
                                        <h6>2016 - 2018</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="educationbox">
                                <div className="row cols-2">
                                    <div className="smlbox cols">
                                        <h3>. X</h3>
                                    </div>
                                    <div className="bigbox cols">
                                        <h4>K.V.K. Govt Boys Higher Secondary School, Erode.</h4>
                                        <h5>Grade- 83.2%</h5>
                                        <h6>2015 - 2016</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* education end----------------------------- */}


                        {/* experience start------------------------------- */}

                        <div id="experiencecont" className="col-lg-3">
                            <h2>Experience</h2>
                            <ul>
                                <li>
                                    <h4>PANO EXPORTS</h4>
                                    <h5>PRODUCTION MANAGER</h5>
                                    <h6>1 Years</h6>
                                </li>
                                <li>
                                    <h4>ADARSH KNITWEAR (P)LTD</h4>
                                    <h5>PRODUCTION INCHARGE</h5>
                                    <h6>3 Years</h6>
                                </li>
                            </ul>
                            <div className="whtdo">
                                <h2 id="head2">What can i do?</h2>
                                <ul>
                                    <li><h4>Devolop Webpage</h4></li>
                                    <li><h4>Using React</h4></li>
                                    <li><h4>MX - bootstrap</h4></li>
                                    <li><h4>Knowledeg of CSS</h4></li>
                                </ul>
                            </div>


                        </div>

                        {/* experience end------------------------------- */}

                    </div>
                </div>
            </section>

            {/* resume end------------------------ */}

            {/* project start------------------------ */}

            <section >
                <div id='project'></div>
                <div className="project_head">
                    <h1 className='text-uppercase text-center text-light p-1'>project</h1>
                </div>

                <div className="row project_cont ">

                    <div className="project_main col-lg-6 ">

                        <div className="project_box text-light text-center">

                            <div className="video-box">
                                <video loop muted autoPlay="autoplay">
                                    <source src={project1} type="video/mp4" />
                                </video>
                            </div>

                            <a href='https://praveensomu.github.io/red-wine/' target='blank' className='text-capitalize text-center'> Red Wine Cafe</a>
                            <p >This project is using of all HTML tags and CSS properties. And also mx using of Bootstrap 5 and CSS transition , animations. It's mulipal page web site so will useing of ROUTER-DOM & user friendly Responsive REACT JS Project. </p>
                        </div>
                    </div>

                    <div className="project_main col-lg-6">
                        <div className="project_box text-light text-center">

                            <div className="video-box">
                                <video loop muted autoPlay="autoplay">
                                    <source src={project2} type="video/mp4" />
                                </video>
                            </div>

                            <a href='https://PraveenSomu.github.io/resort/' target='blank' className='text-capitalize text-center mx-auto'> subii's resort</a>
                            <p> It's a single page REACT JS webpage project. Using of all kind of CSS animation and Jqurey. Many more code writen by Bootstrap key & CSS Properties. And it's a Responsive and room booking form also used. </p>
                        </div>
                    </div>



                </div>
            </section>

            {/* project end------------------------ */}

            {/* contact start---------------------- */}

            <section>
                <div id='contact'></div>
                <div id='contact_media' className="row">
                    <div className=" col-lg-12 contact_box2 mx-auto ">
                        <h2 className='text-light text-center'>Contact Me!! </h2>
                        <div className='contact_main d-flex row row-col-3'>
                            <div className="contact_box3 cols text-uppercase mx-auto text-center rounded">
                                <FaPhone id='contact_icon' /> <br />
                                <h4>phone</h4>
                                <h6>+91 9345751657</h6>
                            </div>
                            <div className="contact_box3 cols text-uppercase mx-auto text-center rounded">
                                <MdEmail id='contact_icon' /> <br />
                                <h4>email</h4>
                                <h6 className='text-lowercase'>praveensomu567 @gmail.com</h6>
                            </div>
                            <div className="contact_box3 cols text-uppercase mx-auto text-center rounded">
                                <FaLocationDot id='contact_icon' /> <br />
                                <h4>address</h4>
                                <h6>punjai puliampatti , erode - 638459.</h6>
                            </div>
                        </div>

                        <div className='myname'>
                            <h6>Desinged & Developed By Praveenn Copyright &copy; &#8482; </h6>
                        </div>
                    </div>


                </div>

            </section>

            {/* contact end------------------------------- */}

        </>
    )
}

export default Home;
