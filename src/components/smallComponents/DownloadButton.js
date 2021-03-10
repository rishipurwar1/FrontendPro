import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import Modal from './Modal';

const DownloadButton = ({ color }) => {
    const [showModal, setShowModal] = useState(false);
    const [downloadingModal, setDownloadingModal] = useState(false);
    const { currentUser } = useAuth();

    const downloadAssets = () => {
        if (currentUser) {
            window.open("https://res.cloudinary.com/di5hmgowi/raw/upload/v1615289132/challenges/random_quote_generator_p3lgcv.zip", '_blank', 'noopener,noreferrer');
            setDownloadingModal(true);
        } else {
            setShowModal(true)
        }
    }
    return (
        <>
            <button className={`${color} text-gray-300 font-semibold shadow-md py-3 px-5 rounded-xl text-base focus:outline-none block w-48`} onClick={downloadAssets}><i className="animate-bounce fas fa-arrow-down mr-2"></i>Download</button>
            {showModal ? <Modal setShowModal={setShowModal} title="Oops! Look like you aren't logged in" emoji="😌" /> : null}
            {downloadingModal ? <Modal downloadingModal setShowModal={setDownloadingModal} title="Thanks for downloading a Coding Space challenge." emoji="🙏" /> : null}
        </>
    )
}

export default DownloadButton
