import React from 'react'
import { useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import { v4 as uuidv4 } from 'uuid';
import {timestamp} from '../../config/fbConfig'
// import useCreateChallenge from '../../hooks/useCreateChallenge'


const CreateChallenge = () => {
    const { addChallenge } = useFirestore('challenges');

    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tagone, setTagOne] = useState([]);
    const [tagtwo, setTagTwo] = useState([]);
    const [tagthree, setTagThree] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        addChallenge({image, title, description, tags: [tagone, tagtwo, tagthree], id: uuidv4(), createdAt: timestamp()})
        // useCreateChallenge();
    }
    return (
        <div className="ml-64">
            <form className="ml-64" action="" onSubmit={handleSubmit}>
                <input placeholder="Enter Image" type="text" onChange={e => setImage(e.target.value)} />
                <input placeholder="Enter Title" type="text" onChange={e => setTitle(e.target.value)} />
                <input placeholder="Enter Description" type="text" onChange={e => setDescription(e.target.value)} />
                <input placeholder="Enter Tag One" type="text" onChange={e => setTagOne(e.target.value)} />
                <input placeholder="Enter Tags Two" type="text" onChange={e => setTagTwo(e.target.value)} />
                <input placeholder="Enter Tags Three" type="text" onChange={e => setTagThree(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateChallenge
