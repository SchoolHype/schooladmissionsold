import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { GiPositionMarker } from "react-icons/gi";
import { FaMapPin } from "react-icons/fa";
import { Filter } from './../Filter/Filter'

import { database } from '../../../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

import styles from './list.module.css'

export const List = () => {
  const [info , setInfo] = useState([]);

    useEffect(() => {
      fetchData()
    }, [])

    useEffect(() => {
      console.log(info)
    }, [info])
  
    const fetchData = () => {
      //const constraintsArr = []
//
      //if(endowment){
      //  constraintsArr.push(where('endowment', '==', `{clicked option}`),
      //} else if(living) {
      //  constraintsArr.push(where('living', '==', `{}`),
      //}
     
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
          <h3>{`Search Results: ${2}`} </h3>
          <div className={styles.searchCards}>
            {info.map(school => {
              return (
                <div className={styles.schoolcard}>
                  <h2>{school.data.institute}</h2>
                  <div className={styles.markerSection}>
                    <FaMapPin className={styles.i} />
                    <p>{school.data.city}</p>

                    <GiPositionMarker className={styles.i} />
                    <p>{school.data.state}</p>
                  </div>
                  <Link href={`/school/${school.id}`}>
                    <button className={styles.searchbutton}> Learn More </button>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
    );
}



