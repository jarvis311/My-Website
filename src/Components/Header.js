import React from 'react'
import '../Styles/Header.css'
import HeaderCv from './HeaderCv'
import MYSELF from '../Images/MYSELF.png'


const Header = () => {
    return (
        <header className='container header'>
            <div className="headerInfo">
                <h5>Hello I'm </h5>
                <h1 className='waviy'>
                    <span style={{ '--i': 1 }}>J</span>
                    <span style={{ '--i': 2 }}>I</span>
                    <span style={{ '--i': 3 }}>G</span>
                    <span style={{ '--i': 4 }}>N</span>
                    <span style={{ '--i': 5 }}>E</span>
                    <span style={{ '--i': 6 }}>S</span>
                    <span style={{ '--i': 7 }}>H</span>
                    &nbsp; &nbsp;
                    <span style={{ '--i': 8 }}>P</span>
                    <span style={{ '--i': 9 }}>A</span>
                    <span style={{ '--i': 10 }}>T</span>
                    <span style={{ '--i': 11 }}>E</span>
                    <span style={{ '--i': 12 }}>L</span>
                </h1>
                <h5 className="text-light cv">Web Developer </h5>
                <HeaderCv />
            </div>

            <div className="me">
                <img src={MYSELF} alt="Jignesh Patel" />
            </div>
        </header>
    )
}

export default Header