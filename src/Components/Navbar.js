import React from 'react'
import '../Styles/Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaDharmachakra} from 'react-icons/fa'
import {VscPerson} from 'react-icons/vsc'
import {AiOutlineProject} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import { useState } from 'react'
const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState('#')

  return (
    <div className='navbar'>
        <a href="# " onClick={() => setActiveIcon('#')}className={activeIcon === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#About " onClick={() => setActiveIcon('#About')} className={activeIcon === '#About' ? 'active' : ''}><VscPerson/></a>
        <a href="#Skill "  onClick={() => setActiveIcon('#Skill')} className={activeIcon === '#Skill' ? 'active' : ''}><FaDharmachakra/></a>
        <a href="#Project "  onClick={() => setActiveIcon('#Project')} className={activeIcon === '#Project' ? 'active' : ''}><AiOutlineProject/></a>
        <a href="#Contact "  onClick={() => setActiveIcon('#Contact')} className={activeIcon === '#Contact' ? 'active' : ''}><BsTelephone/></a>
    </div>
  )
}

export default Navbar