import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase-config';

const useFirebaseDatabase = (collection: string) => {

    const [firebaseDocuments, setFirebaseDocuments] = useState<Array<any>>([]);

    useEffect(() => {
        getAll();
    }, []);

    const save = (values: any) => {
        return db.collection(collection).doc().set(values).then(() => {
            
        }).catch(() =>{
            alert("Lo sentimos, hubo un error al guardar.")
        });
    }

    const getAll = () => {
        return db.collection(collection).onSnapshot(querySnapshot => {
            const firebaseCollectionData : Array<any> = [];
            querySnapshot.forEach(firebaseDoc => {
                firebaseCollectionData.push({ ...firebaseDoc.data(), id: firebaseDoc.id });
            });
            setFirebaseDocuments(firebaseCollectionData);
        });
    };

    return {
        save,
        getAll,
        recomendationDocuments: firebaseDocuments
    }

}

export default useFirebaseDatabase;