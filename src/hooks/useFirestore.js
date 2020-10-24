import { useState, useEffect } from 'react';
import { firestore } from '../config/fbConfig';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(true);

    // getting realtime data from the firebase for challenges and solutions
    useEffect(() => {
        firestore.collection(collection)
        // .orderBy('createdAt', 'desc')
        .onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push({...doc.data(), id: doc.id});
          });
          setDocs(items);
          setLoading(false);
        });
      }, []);

      //add solution to the firebase
      const addSolution = (solution) => {
        firestore.collection(collection)
        .doc()
        .set(solution)
        .catch(err => console.log(err));
      }

      //delete a solution from the firestore db
      const deleteSolution = (solution) => {
        firestore.collection(collection)
        .doc(solution.id)
        .delete()
        .catch(err => console.log(err))
      }
  
    return { docs, loading, addSolution, deleteSolution };
}

export default useFirestore;