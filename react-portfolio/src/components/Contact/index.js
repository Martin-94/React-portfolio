import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../Layout/AnimatedLetters';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [letterClass] = useState('text-animate')
    const refForm = useRef()
    


const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
        'gmail',
        'template_c8b2hog',
        refForm.current,
        'LPibggk-M9aHtwqan'
    )
    .then(
        () => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send the meassage, please try again')
        }
    )
}

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                 <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e' ]}
                    idx={15}
                    />
                 </h1>
                 <p>
                        I would like to work on a diverse collection of projects,
                        to learn new skills.
                        If you have any enquires, the form below may be used to get in
                        contact with me.
                 </p>
                 <div className='contact-form'>
                  <form ref={refForm} onsubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder='Name' required/>
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder='Email' required/>
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required/>
                        </li>
                        <li>
                            <textarea placeholder='Message' name="message" required>

                            </textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="SEND"/>
                        </li>
                    </ul>
                  </form>
                 </div>
            </div>
            <div className='info-map'>
                  Joshua Meyer
                  <br/>
                  Pretoria
                  <br/>
                  South Africa
                  <br/>
                  064-536-0291
                  <br/>
                  <span>meyerjoshua025@gmail.com</span>
            </div>
            
        </div>
        <Loader type="pacman"/>
        </>
        )

}

export default Contact