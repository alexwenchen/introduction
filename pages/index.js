import homeStyles from '../styles/Home.module.css'
import Head from 'next/head'
import Project from '../components/Project.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Introduction</title>
      </Head>
      <h1 className={homeStyles.greeting}>
        Hi, I'm <span> Alex Chen </span>
      </h1>
      <p className={homeStyles.description}>
        I am currently studying computer science (Turing Scholars Honors) at the University of Texas at Austin. <br/> I love competitive programming, and enjoy doing
        machine learning and app development. 
      </p> 
      <h1 className={homeStyles.home}>
        Projects
      </h1> 
      <Project title="Tetris" link="https://gitfront.io/r/WenAlexChen/QLzW4V4FTkeQ/Tetris/"/>
    </div>
  )
}
