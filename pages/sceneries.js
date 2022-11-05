import homeStyles from '../styles/Home.module.css'
import Head from 'next/head'
import Project from '../components/Project.js'
import Website from '../components/Website.js'

export default function Home() {
  return (
    <div class="flex flex-col items-center justify-center">
      <Head>
        <title>Scenery</title>
      </Head>
      <h1 class="pt-20 text-5xl"> 
        Under Construction
      </h1>
    </div>
  )
}
