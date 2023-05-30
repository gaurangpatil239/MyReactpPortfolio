import Loader from "react-loaders";
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import myGif from '../../assets/images/programming.gif'

const Contact = () => {
const refForm = useRef()
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(()=>{
    setTimeout(() =>{
      setLetterClass('text-animate-hover')
  }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .sendForm(
      'gmail', 
      'template_r38bdrs', 
      refForm.current, 
      'd_mRS3JQQWnhQOnQA'
    )
    .then(
      () => {
      alert ('Message Sent')
      window.location.reload(false)
  }, 
  ()=> {
    alert('Failed to send, please try again')
  }
  )
}
  return (
    <>
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
          strArray={['C', 'o','n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
          idx={15}
          />
        </h1>
        <p>
          Hi Visitor, <br /> 
          Hope you liked my way of designing things and the looks of the website that I created. 
          For any further queries or any requests please feel free to reach out to me via email, or 
          connect me over your linkedIn profile. Mail me at gargeegul1999@gmail.com.
          I also am interested in making up freelancing projects individually or in a group 
          of team. I am open to collaborate and work together to create any webapp.
          Hopefully I get to work for you or along with you.<br />
          Thanks and regards, <br /> 
          Gaurang Patil <br/>
          (self made Front-end Developer)
        </p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type='text' name ='from_name' placeholder="Name" required />
              </li>
              <li className="half">
                <input type='email' name ='from_email' placeholder="Email" required />
              </li>
              <li>
                <input placeholder="Subject" type="text" name="subject" required />
              </li>
              <li>
                <textarea placeholder="Message" name="message" required>
                </textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="image-wrap">
      <img src={myGif} />
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Contact