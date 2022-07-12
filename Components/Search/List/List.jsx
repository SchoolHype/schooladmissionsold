import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useUserAuth } from '../../../context/userAuthContext'
import Link from 'next/link'
import { GiPositionMarker } from "react-icons/gi";

import { database } from '../../../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

import styles from './list.module.css'

export const List = () => {

  const {logout} = useUserAuth();
  const router = useRouter();

  const [info , setInfo] = useState([]);

    useEffect(() => {
      fetchData()
    }, [])

    //useEffect(() => {
    //  console.log(info)
    //}, [info])
  //
    const fetchData = () => {
     
      const schoolInfoRef = collection(database, 'schools');

      getDocs(schoolInfoRef).then(response => {

        const schoolsData = response.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        setInfo(schoolsData)
      }).catch(error => console.log(error.message))
    }

    return (
        <div className={styles.searchSection}>
          <h1>Search Results:  </h1>
          {info.map(school => {
              return (
                <div className={styles.schoolcard}>
                  <h3>{school.data.institute}</h3>
                  <div className={styles.markerSection}>
                    <GiPositionMarker className={styles.i} />
                    <p>{school.data.state}</p>
                  </div>
                  <p>{school.data.address}</p>
                  <Link href={`/school/${school.id}`}>
                    <button className={styles.searchbutton}> Learn More </button>
                  </Link>
                </div>
              )
            })}
        <button onClick={() => { logout(); router.push('/') }}> Logout </button>
        </div>
    );
}



