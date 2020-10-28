import { useState, useEffect } from 'react';
import { firestore } from '../config/fbConfig';
import { useAuth } from '../context/AuthContext';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(true);
    const {currentUser} = useAuth();

    // getting realtime data from the firebase for challenges and solutions
    useEffect(() => {
        let unsubscribe = firestore.collection(collection)
        // .orderBy('createdAt', 'desc')
        .onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push({...doc.data(), id: doc.id});
          });
          setDocs(items);
          setLoading(false);
        });
        return unsubscribe;
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

      //add solution to the firebase
      const addSolution = (solution) => {
        firestore.collection(collection)
        .add({
          ...solution,
          author: currentUser.displayName,
          id: currentUser.id,
          photoURL: currentUser.photoURL,
          createdAt: new Date()
        })
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