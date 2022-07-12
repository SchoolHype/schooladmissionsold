import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { database } from '../../../config/firebase'

import styles from './filter.module.css'

export const Filter = () => {

    //useEffect(() => {
    //    fetchData()
    //}, [])
  //
    //const fetchData = () => {
    //    const schoolInfoRef = collection(database, 'schools');
//
    //    const q = query(schoolInfoRef , where("living", "==", "Boarding School"));
//
    //    getDocs(q).then(response => {
    //        const schoolsData = response.docs.map(doc => ({
    //        data: doc.data(),
    //        id: doc.id,
    //        }))
    //        setInfo(schoolsData)
    //    }).catch(error => console.log(error.message))
    //}

  return (
    <div className={styles.filterSection}>
        <div className={styles.filterCategory}>
            <p>Living</p>
            <input type="radio" name="living" value="boarding" />
            <label htmlFor="boarding">Boarding</label><br />
            <input type="radio" name="living" value="day school" />
            <label htmlFor="day school">Day School</label><br />
        </div>

        <div className={styles.filterCategory}>
            <p>Endowment</p>
            <input type="radio" name="living" value="boarding" />
            <label htmlFor="boarding">Boarding</label><br />
            <input type="radio" name="living" value="day school" />
            <label htmlFor="day school">Day School</label><br />
        </div>

        <div className={styles.filterCategory}>
            <p>Level</p>
            <input type="radio" name="living" value="boarding" />
            <label htmlFor="boarding">Boarding</label><br />
            <input type="radio" name="living" value="day school" />
            <label htmlFor="day school">Day School</label><br />
        </div>

        <div className={styles.filterCategory}>
            <p>Education Board</p>
            <input type="radio" name="living" value="boarding" />
            <label htmlFor="boarding">Boarding</label><br />
            <input type="radio" name="living" value="day school" />
            <label htmlFor="day school">Day School</label><br />
        </div>

        <div className={styles.filterCategory}>
            <p>Location</p>
            <input type="radio" name="living" value="boarding" />
            <label htmlFor="boarding">Boarding</label><br />
            <input type="radio" name="living" value="day school" />
            <label htmlFor="day school">Day School</label><br />
        </div>

    </div>
  )
}
