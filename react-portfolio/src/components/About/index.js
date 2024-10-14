import './index.scss'
import AnimatedLetters from '../Layout/AnimatedLetters'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faDocker, faHtml5, faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'

const About = () => {

const [letterClass] = useState('text-animate')


    return(
     <>
        <div className='container about-page'>
            <div className='text-zone'>
               <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
                />
               </h1>
                  <p>
                   I am working towards a career in Software Engineering with a company
                   that will be able to equip me with the experience and skills to prosper
                   in the field. I am a quick learner and hardworking so I will be able
                   to adapt my skills to what is needed from me. 
               </p>
                  <p align="LEFT">
                   I'm hard-working, enthusiastic about learning new things and good under pressure.
                   I seek to constantly improve myself with new opportunities.
                   </p>
                    <p>
                     In my spare time, I like learning about new things with a big focus being 
                   put on History and Technology. I am a huge fan of sports and I love
                   gaming too.
                    </p>
            </div>
            <div className='stage-cube-cont'>
               <div className='cubespinner'>
                 <div className='face1'>
                    <FontAwesomeIcon icon={faJava} color="#DD0031"/>
                 </div>
                 <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                 </div>
                 <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                 </div>
                 <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                 </div>
                 <div className='face5'>
                    <FontAwesomeIcon icon={faDocker} color="#EFD81D"/>
                 </div>
                 <div className='face6'>
                    <FontAwesomeIcon icon={faJs} color="#EC4D28"/>
                 </div>
               </div>
            </div>
        </div>
        
        <Loader type="pacman" />
        </>
    )
}

export default About