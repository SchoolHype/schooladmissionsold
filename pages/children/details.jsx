//import { collection, getDocs } from 'firebase/firestore';
//import React, { useEffect, useState } from 'react'
//import { database } from '../../config/firebase';
//
//const details = () => {
//
//    const [child, setChild] = useState([]);
//
//    useEffect(() => {
//        getDetails()
//    }, [])
//
//    useEffect(() => {
//        console.log(child)
//    }, [child])
//    
//    
//    const getDetails = () => {
//        const childDetailsRef = collection(database, 'child')
//        getDocs(childDetailsRef)
//        .then(response => {
//            const details = response.docs.map( doc => ({
//                data: doc.data(), 
//                id:doc.id
//            }))
//            setChild(details)
//        }) 
//        .catch(error => console.log(error.message))
//    }
//
//  return (
//    <div>
//    {
//        child.map(childdetails => (
//            <p key={childdetails.id}> { childdetails.data.name } </p>
//        ))
//    }
//
//    </div>
//  )
//}

export default details;

