import  React from 'react';
import logo from '../images/logo.svg'

export const HomePage = () => {
    return(
        <div className='home'>
            <img src={logo} alt={logo}/>
            <h1>Домашнє завдання по темі: React-Router</h1>
        </div>
    )
}