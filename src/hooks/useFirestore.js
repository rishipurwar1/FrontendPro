import { useState, useEffect } from 'react';
import { challengeFirestore } from '../config/fbConfig';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    const addChallenge = (newChallenge) => {
      challengeFirestore.collection(collection)
        .doc(newChallenge.id)
        .set(newChallenge)
        .catch((err) => {
          console.error(err);
        });
    }  

    useEffect(() => {
        console.log('ran')
        challengeFirestore.collection(collection)
        // .orderBy('createdAt', 'desc')
        .onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push({...doc.data(), id: doc.id});
          });
          setDocs(items);
        });
      }, []);
  
    return { docs, addChallenge };
}

export default useFirestore;