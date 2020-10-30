import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../smallComponents/Spinner';

const ShowWebsite = ({url, title, github}) => {
    const [loading, setLoading] = useState(true);
    const onLoad = () => {
        setLoading(false)
    }
    const onError = () => {
        console.log('error');
    }
     return (
        <div className="mx-2">
            <div className="mb-3 mt-5">
                <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" href={github} target="_blank" rel="noopener noreferrer"><i className="fas fa-chevron-left pr-1"></i><i className="fas fa-chevron-right pr-1"></i>Code</a>
                <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={url} target="_blank" rel="noopener noreferrer">Live Website</a>
            </div>
            <div className="relative">
                {loading ? <Spinner /> : null}
                <iframe className="absolute top-0 left-0 w-full h-screen overflow-y-scroll border-solid border-2 border-gray-300" src={url} onLoad={() => onLoad()} onError={() => onError()} title={title} height="700px"></iframe>
            </div>
        </div>
    )
}

export default ShowWebsite
