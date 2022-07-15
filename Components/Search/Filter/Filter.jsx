import React from 'react'
import styles from './filter.module.css'

export const Filter = () => {
  return (
    <div className={styles.filterSection}>
        <div className={styles.filterCategory}>
            <h4>Living: </h4>
            <select>
                <option className={styles.filterOptions} name="living" value="all">All</option>
                <option className={styles.filterOptions} name="living" value="boarding"> Boarding</option>
                <option className={styles.filterOptions} name="living" value="day school"> Day School </option>
            </select>
        </div>

        <div className={styles.filterCategory}>
            <h4>Endowment: </h4>
            <select>
                <option className={styles.filterOptions} name="living" value="all">All</option>
                <option className={styles.filterOptions} name="living" value="boarding"> Boarding</option>
                <option className={styles.filterOptions} name="living" value="day school"> Day School </option>
            </select>
        </div>

        <div className={styles.filterCategory}>
            <h4>Level: </h4>
            <select>
                <option className={styles.filterOptions} name="living" value="all">All</option>
                <option className={styles.filterOptions} name="living" value="boarding"> Boarding</option>
                <option className={styles.filterOptions} name="living" value="day school"> Day School </option>
            </select>
        </div>

        <div className={styles.filterCategory}>
            <h4>Board: </h4>
            <select>
                <option className={styles.filterOptions} name="living" value="all">All</option>
                <option className={styles.filterOptions} name="living" value="boarding"> Boarding</option>
                <option className={styles.filterOptions} name="living" value="day school"> Day School </option>
            </select>
        </div>

        <div className={styles.filterInput}>
            <h4>Pin: </h4>
            <input type="text" placeholder='Enter Pin'/>
        </div>

    </div>
  )
}