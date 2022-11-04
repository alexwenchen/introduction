import Link from 'next/link'
import projectStyles from '../styles/Project.module.css'

const Project = ({title, link}) => {

    return (
        <>
            <Link href={link}>
                <button class="bg-opacity-0 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded border-2 border-black-500 h-32 w-full">
                    {title}
                </button>
            </Link>
        </>
    )
}

export default Project