import { useState, useEffect } from 'react';
import { firestore } from '../config/fbConfig';
import { useAuth } from '../context/AuthContext';
import {useHistory} from 'react-router-dom'

const getDoc = doc => ({ ...doc.data(), id: doc.id });


const useFirestore = (collection, docId) => {
    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(true);
    const {currentUser} = useAuth();
    const history = useHistory();
  // getting realtime data from the firebase for challenges and solutions
  useEffect(() => {
        let subject = firestore.collection(collection);

        if (docId) {
          // If docId is available, listen for changes to a
          // particular document
          subject = subject.doc(docId);
        }                                 
        let unsubscribe = subject
        // .orderBy('createdAt', 'desc')
          .onSnapshot(snapshot => {
            const items = docId ? [getDoc(snapshot)] : snapshot.docs.map(getDoc);
            console.log('run useeffect');
            setDocs(items);
            setLoading(false);
        });
        return unsubscribe;
      }, [collection, docId]); // eslint-disable-line react-hooks/exhaustive-deps

      //add solution to the firebase
      const addSolution = (solution) => {
        try {
          firestore.collection(collection)
          .add({
            ...solution,
            author: currentUser.displayName,
            id: currentUser.id,
            photoURL: currentUser.photoURL,
            createdAt: new Date()
          })
          history.push("/solutions");
        } catch (error) {
          console.log(error);
        }
      }

      //delete a solution from the firestore db
      const deleteSolution = (solution) => {
        try {
          firestore.collection(collection)
          .doc(solution.id)
          .delete()
          history.push("/solutions");
        } catch (error) {
          console.log(error);
        }
      }

      //update solution
      const updateSolution = (updatedSolution, id) => {
            try {
              firestore.collection(collection)
            .doc(id)
            .update(updatedSolution)
            } catch (error) {
              console.log(error)
            }
      }
  
    return { docs, loading, addSolution, deleteSolution, updateSolution };
}

export default useFirestore;