import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJava, faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faArrowCircleRight, faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                    idx={15}
                />
                </h1>
                <p>I'm a person with keen interest in learning more about front-end development and new technologies related to it. 
                    Looking for a role in an established IT firm as a fronteend developer
                    to work with the latest technologies and overcoming the new challenges in ever new project that comes up.
                </p>
                <p align = 'LEFT'>I'm confident enough and have a hands on expreience with the technologies used for the front-end as well as
                    designing the database. I'm open to learn at every step and aply the new 
                    learnings at the same time in the upcoming projects.
                </p>
                <p>If I am asked to define myself and my qualities in a single sentence it 
                    would be like "A Post Graduate student who loves to see and observe
                    the emerging new changes make his own, Loves to play with keyboard,
                    photography skills and obviously a tech-enthusiast."
                </p>
                <p>
                    <b><u>Find the collection of my skills in the cube</u></b>
                    <br/>
                    <br/>
                    <FontAwesomeIcon icon={faArrowCircleRight}  />
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon ={faDatabase} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon ={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon ={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon ={faJava} color="#2F58CD" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon ={faJsSquare} color="#ffd400" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon ={faCss3} color="#2F58CD" />
                    </div>
                </div>
            </div>
        </div>
        <>
        <Loader type="pacman"/>
        </>
        </>
        )
        
    }

export default About