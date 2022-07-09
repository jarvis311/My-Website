import React from 'react'
import '../Styles/Myskill.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { FaBootstrap } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { DiPhp } from 'react-icons/di'
import { SiMysql} from 'react-icons/si'
import { SiMongodb} from 'react-icons/si'
import { SiMaterialui } from 'react-icons/si'

import Skill from './Skill'
const MySkill = () => {
  return (
    <section id='Skill'>
      <h5>What I Have</h5>
      <h2>My Skill</h2>      
    <div style={{marginRight:'auto', marginTop:'-15px', marginLeft:'auto', textAlign:'center'}}>
        <lord-icon
          src="https://cdn.lordicon.com/sbiheqdr.json"
          trigger="hover"
          style={{width:'100px',height:'100px'}} 
        />
      </div>
        


      <div className="container skill">
        <div className="frontend">
          <h3>FrontEnd Devlopment</h3>
          <div className="content">
           <Skill Icon={AiFillHtml5} title='HTML'/>
           <Skill Icon={DiCss3} title='CSS'/>
           <Skill Icon={TbBrandJavascript} title='Java Script'/>
           <Skill Icon={FaBootstrap} title='Bootstrap'/>
           <Skill Icon={FaReact} title='React'/>
           <Skill Icon={SiMaterialui} title='Material ui'/>

          </div>
        </div>


        <div className="backend">
          <h3>BackEnd Devlopment</h3>
          <div className="content">
           <Skill Icon={FaNodeJs} title='NodeJs'/>
           <Skill Icon={DiPhp} title='PHP'/>
           <Skill Icon={SiMysql} title='MYSQL'/>
           <Skill Icon={SiMongodb} title='MongoDB'/>



          </div>
        </div>
      </div>
    </section>
  )
}

export default MySkill