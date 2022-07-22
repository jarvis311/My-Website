import React from 'react'
import resume from '../Images/__RESUME.pdf'
const HeaderCv = () => {
  return (
    <div className='cv'>
        <a className='btn' href={resume} download>Download Resume</a>
        <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default HeaderCv