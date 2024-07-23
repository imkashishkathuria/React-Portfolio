import logo from '../../assets/images/pg.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useEffect, useState } from 'react';
import Logo from './Logo';
import '../../styles/main.scss';

const Home=()=>{
    const [letterClass, setLetterClass] =useState('text-animate')
    const nameArray = ['a','s','h','i','s','h']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

    useEffect(()=>{
        setTimeout(()=>{
            return setLetterClass('text-animate-hover')
        },4000)
    },[])

    return (
        <div className='container home-page'>
            <div className='text-zone'>
           
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I,</span>
                <span className={`${letterClass} _14`}>'m</span>
            <img src={logo} alt="developer"/>
            <AnimatedLetters letterClass={letterClass}
            strArr={nameArray}
            idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass}
            strArr={jobArray}
            idx={22} />

            </h1>
            <h2>
                Frontend Developer / Javascript Expert / React Framework
            </h2>
            <Link to="/contact" className='flat-button'>
            CONTACT ME
            </Link>
            
            </div>

            <Logo />
        </div>
    )
}

export default Home;