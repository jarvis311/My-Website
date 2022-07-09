import React from 'react'
import '../Styles/Myskill.css'

const Skill = ({Icon , title}) => {
    return (
        <article className="details">
            <Icon className='skillI_icon' />
            <div>
                <h4>{title}</h4>
            </div>
        </article>
    )
}

export default Skill