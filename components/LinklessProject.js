import Link from 'next/link'
import projectStyles from '../styles/Project.module.css'

const Project = ({title, description}) => {

    return (
        <>
            <button class="text-2xl text-white bg-blue-900 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 h-32 w-full">
                {title} <br/>
                <span class="text-sm"> {description} </span>
            </button>
        </>
    )
}

export default Project