import homeStyles from '../styles/Home.module.css'
import Head from 'next/head'
import Project from '../components/Project.js'
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
          Hi, I'm <span> Alex Chen </span>
        </h1>
        <div className={homeStyles.socials}> 
          <Link href="https://github.com/alexwenchen"> 
            <img class="h-12 w-12 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
          </Link>
          <Link href="https://www.linkedin.com/in/wen-chen-3006ba1a5/"> 
            <img class="h-12 w-12 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/>
          </Link>
        </div>
      </div>
      <p className={homeStyles.description}>
        I am currently studying computer science (Turing Scholars Honors) at the University of Texas at Austin. <br/> I love competitive programming, and enjoy doing
        machine learning and app development. <br/> I'm currently seeking internship opportunities for the summer of 2023.
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
      <Project title="Tetris" link="https://gitfront.io/r/WenAlexChen/QLzW4V4FTkeQ/Tetris/"/>
      <Project title="Boggle" link="https://gitfront.io/r/WenAlexChen/L46xDXNMP5zH/Boggle/"/>
      <Project title="Critters" link="https://gitfront.io/r/WenAlexChen/7Vcbvcr2AGyH/Critters/"/>
      <br />
      <br />
      <h1 className={homeStyles.category}>
        Competitive programming
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
      <Project title="Computing Olympiad Code Repository" link="https://github.com/alexwenchen/CompetitiveProgrammingSolutions"/> 
      <Website imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Codeforces_logo.svg/2560px-Codeforces_logo.svg.png" link="https://codeforces.com/profile/Alx"/>
      <Website imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/1280px-LeetCode_Logo_black_with_text.svg.png" link="https://leetcode.com/looking_for_swe_internships/"/>
    </div>
  )
}
