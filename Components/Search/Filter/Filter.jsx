import React from 'react'
import styles from './filter.module.css'

export const Filter = () => {


export const Filter = () => {
    const [endowment, setEndowment] = useState("");
    const [level, setLevel] = useState("");
    const [living, setLiving] = useState("");
    const [board, setBoard] = useState("");

  return (
    <div className={styles.filterSection}>
        <div className={styles.filterCategory}>
            <h4>Living: </h4>
            <select onChange={e => setLiving(e.target.value)}>
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

            <select onChange={e => setLiving(e.target.value)}>
                <option className={styles.filterOptions} name="endowment" value="all">All</option>
                <option className={styles.filterOptions}  name="endowment" value="Government School">Government School</option>
                <option className={styles.filterOptions}  name="endowment" value="Government Aided Private School">Government Aided Private School</option>
                <option className={styles.filterOptions}  name="endowment" value="Private School">Private School</option>
                <option className={styles.filterOptions}  name="endowment" value="Internation School">Internation School</option>
                <option className={styles.filterOptions}  name="endowment" value="Preschool">Preschool</option>
                <option className={styles.filterOptions}  name="endowment" value="Home School">Home School</option>
                <option className={styles.filterOptions}  name="endowment" value="National Open School">National Open School</option>
                <option className={styles.filterOptions}  name="endowment" value="Special Needs School">Special Needs School</option>
                <option className={styles.filterOptions}  name="endowment" value="KV">Kendriya Vidyalaya (KV)</option>
                <option className={styles.filterOptions}  name="endowment" value="JNV">Jawahar Navodaya Vidyalaya (JNV)</option>
                <option className={styles.filterOptions}  name="endowment" value="Sainik School">Sainik School</option>
            </select> 
        </div>

        <div className={styles.filterCategory}>
            <h4>Level: </h4>
            <select>
                <option className={styles.filterOptions} name="living" value="all">All</option>
                <option className={styles.filterOptions} name="living" value="boarding"> Boarding</option>
                <option className={styles.filterOptions} name="living" value="day school"> Day School </option>
            </select>
            <select onChange={e => setLevel(e.target.value) }>
                <option className={styles.filterOptions} name="level" value="all">All</option>
                <option className={styles.filterOptions} name="level" value="Pre-Primary">Pre-Primary</option>
                <option className={styles.filterOptions} name="level" value="Primary">Primary</option>
                <option className={styles.filterOptions} name="level" value="Middle">Middle</option>
                <option className={styles.filterOptions} name="level" value="Secondary">Secondary</option>
                <option className={styles.filterOptions} name="level" value="Senior-Secondary"> Senior-Seconday</option>
            </select>
        </div>

        <div className={styles.filterCategory}>
            <h4>Board: </h4>
            <select onChange={e => setBoard(e.target.value) }>
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
} }