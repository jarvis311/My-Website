import React from 'react'
import '../Styles/Project.css'
import Projects from './Projects'
import Youtube from '../Images/YouTube-clone.png'
import Spotify from '../Images/Spotify-clone.png'
import Calculator from '../Images/Calculator.png'
import RandomQuotes from '../Images/Random-Quotes.png'



const MyProjects = () => {
  return (
    <section id='Project'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container projects">
        
        <Projects title='Spotify-Clone' githubLink='https://github.com' liveLink='https://dribbble.com' image={Spotify}/>
        <Projects title='Youtube-Clone' githubLink='https://github.com' liveLink='https://dribbble.com' image={Youtube}/>
        <Projects title='Linkedin-Clone' githubLink='https://github.com' liveLink='https://dribbble.com' image='https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201904/linkden_9-770x592.JPG?4w0pyK5g0Ea5EMfj3ftAXy2VB4RHU52h'/>
        <Projects title='Screen-Share-App' githubLink='https://github.com' liveLink='https://dribbble.com' image='https://cdn.dribbble.com/users/2515704/screenshots/18289581/media/f46901c40db1b60dca0cfbd1a768cc0e.jpg?compress=1&resize=400x300&vertical=top'/>
        <Projects title='Calculator' githubLink='https://github.com' liveLink='https://dribbble.com' image={Calculator}/>
        <Projects title='Random_Quotes' githubLink='https://github.com' liveLink='https://dribbble.com' image={RandomQuotes}/>

      </div>
    </section>
  )
}

export default MyProjects