import React from 'react'
import '../Styles/Project.css'
import Projects from './Projects'
import Youtube from '../Images/YouTube-clone.png'
import Spotify from '../Images/Spotify-clone.png'
import Calculator from '../Images/Calculator.png'
import RandomQuotes from '../Images/Random-Quotes.png'
import searchmovie from '../Images/searchmovie.png'



const MyProjects = () => {
  return (
    <section id='Project'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container projects">
        
        <Projects title='Youtube-Clone' githubLink='https://github.com' liveLink='https://youtubeclonejp.netlify.app/explore' image={Youtube}/>
        <Projects title='Search-Movie' githubLink='https://github.com' liveLink='https://searchmoviejp.netlify.app/' image={searchmovie}/>
        <Projects title='Calculator' githubLink='https://github.com' liveLink='https://calculator-jp.herokuapp.com/' image={Calculator}/>
        <Projects title='Random_Quotes' githubLink='https://github.com' liveLink='https://quote-generate-jp.herokuapp.com/' image={RandomQuotes}/>
        <Projects title='Linkedin-Clone' githubLink='https://github.com/jarvis311/Linkedin-clone-react' liveLink='https://github.com/jarvis311/Linkedin-clone-react' image='https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201904/linkden_9-770x592.JPG?4w0pyK5g0Ea5EMfj3ftAXy2VB4RHU52h'/>
        <Projects title='Spotify-Clone' githubLink='https://github.com/jarvis311/Spotify-clone' liveLink='https://github.com/jarvis311/Spotify-clone' image={Spotify}/>

      </div>
    </section>
  )
}

export default MyProjects