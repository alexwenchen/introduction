import Link from 'next/link'
import projectStyles from '../styles/Project.module.css'

const Project = ({title, link, description}) => {

    return (
        <>
            <Link href={link}>
                <button class="text-2xl text-black bg-teal-300 hover:bg-cyan-400 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 h-32 w-full">
                    {title} <br/>
                    <span class="text-sm"> {description} </span>
                </button>
            </Link>
        </>
    )
}

export default Project