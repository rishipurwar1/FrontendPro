import { useState, useEffect } from 'react';
import { challengeFirestore } from '../config/fbConfig';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        challengeFirestore.collection("challenges")
        // .orderBy('createdAt', 'desc')
        .onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push({...doc.data(), id: doc.id});
          });
          setDocs(items);
        });
      }, []);
  
    return { docs };
}

export default useFirestore;