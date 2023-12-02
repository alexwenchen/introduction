import homeStyles from '../styles/Home.module.css'
import Head from 'next/head'
import Project from '../components/Project.js'
import LinklessProject from '../components/LinklessProject.js'
import Website from '../components/Website.js'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Introduction</title>
      </Head>
      <div className={homeStyles.introduction}>
        <h1 className={homeStyles.greeting}>
          Hi, I&apos;m <span> Alex Chen </span>
        </h1>
        <div className={homeStyles.socials}> 
          <Link href="https://github.com/alexwenchen"> 
            <img class="h-12 w-12 cursor-pointer" src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"/>
          </Link>
          <Link href="https://www.linkedin.com/in/wen-chen-3006ba1a5/"> 
            <img class="h-12 w-12 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/>
          </Link>
        </div>
      </div>
      <p className={homeStyles.description}>
        I am currently studying computer science (Turing Scholars Honors) at the University of Texas at Austin. I love competitive programming, and enjoy doing
        machine learning and app development.
      </p> 
      <h1 className={homeStyles.category}>
        Projects
      </h1> 
      <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '3px',
        }}
      />
      <br/>
      <Project title="Introduction" link="https://github.com/alexwenchen/Introduction" description="This website, built with NextJS and Tailwind CSS"/>
      <Project title="Flexcel Cloud" link="https://github.com/saranchockan/flexcel-cloud/" description="On-hiatus web application to help competitive debaters with note-taking. Built with ReactJS"/>
      <LinklessProject title="Tetris" description="Recreated the popular video game &apos;Tetris&apos;, and built an AI using a genetic algorithm to play it"/>
      <LinklessProject title="Boggle" description="Recreated the popular word game &apos;Boggle&apos;"/>
      <LinklessProject title="Critters" description="Created an interpreter for a custom “Critter” language containing goto statements, registers, and if statements"/>
      <br />
      <br />
      <h1 className={homeStyles.category}>
        Competitive Programming
      </h1>
      <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '3px',
        }}
      />
      <br/>
      <Project title="Computing Olympiad Code Repository" link="https://github.com/alexwenchen/CompetitiveProgrammingSolutions" description="My solutions to olympiad programming competition problems"/> 
      <Website imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Codeforces_logo.svg/2560px-Codeforces_logo.svg.png" link="https://codeforces.com/profile/Alx"/>
      <Website imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/1280px-LeetCode_Logo_black_with_text.svg.png" link="https://leetcode.com/looking_for_swe_internships/"/>
    </div>
  )
}
