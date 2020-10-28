import React, {useState} from 'react'
import { useAuth } from '../../context/AuthContext';
import Modal from './Modal';

const DownloadButton = () => {
    const [showModal, setShowModal] = useState(false);

    const {currentUser} = useAuth();
    const downloadAssets = () => {
        if(currentUser){
            window.open("https://res.cloudinary.com/di5hmgowi/raw/upload/v1602933977/images/sample_zmazlz.rar", '_blank', 'noopener,noreferrer')
        } else {
            setShowModal(true)
        }
    }
    return (
        <>
            <button className="bg-secondary text-white font-bold py-3 
            px-5 rounded text-2xl focus:outline-none mt-3 block w-48" onClick={downloadAssets}><i className="animate-bounce fas fa-arrow-down mr-2"></i>Download</button>
            {showModal ? <Modal setShowModal={setShowModal} /> : null}
        </>
    )
}

export default DownloadButton
