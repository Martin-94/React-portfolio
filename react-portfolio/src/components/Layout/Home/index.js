import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders'

const Home = () => {
const [letterClass] = useState('text-animate')
const nameArray = [' ', 'J', 'o', 's', 'h', 'u', 'a']
const jobArray = ['a', ' ','B','C','o','m','p','S','C',' ','S','t','u','d','e','n','t']

    return(
      <>
      <div className="container home-page">
         <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br/> 
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
           
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={10} />
            <br/>
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={19} />
            </h1>
            
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
         </div>
         <Logo />
      </div>
          <Loader type="pacman"/>
      </>
    );
}


export default Home