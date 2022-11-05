import Link from 'next/link'
import websiteStyles from '../styles/Website.module.css'

const Website = ({link, imageLink}) => {

    return (
        <>
            <Link href={link}>
                <button class="text-black bg-gradient-to-r from-green-200 via-green-300 to-green-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 h-32 w-full flex flex-col items-center justify-center">
                    <img src={imageLink} class='object-center object-fill h-19 w-96'/>
                </button>
            </Link>
        </>
    )
}

export default Website