import React, { useState } from 'react'
import { FaCalendar, FaSchool, FaUser } from 'react-icons/fa'
import styles from './modal.module.css'

export const Modal = (props) => {

    const [formData, setFormData] = useState({});

    const submitHandler = e => {
        e.preventDefault();
        setFormData(state => {
            return {
                ...state,
                [e.target.name]: e.target.value
            }
        })
        
    }

    const addChild = e => {
        e.preventDefault();

        const {
            name,
            dob,
            class_year,
            address 
        } = formData;
        const userdata = {
            name,
            dob,
            class_year,
            address   
        }

    }

  if(!props.show) {
     return null
   }

  return (
    <div className={styles.modal}>
        <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
                <h4 className={styles.modalTitle}> Add Child Data </h4>
            </div>
            <div className={styles.modalBody}>
            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles.formGroup}>
                    <div className={styles.formElement}>
                            <FaUser className={styles.i} />
                            <input type="text" name='name' value={formData.name ? formData.name : ""} onChange={submitHandler} className={styles.formInput} placeholder="Name of Child" />
                        </div>

                        <div className={styles.formElement}>
                            <FaCalendar className={styles.i} />
                            <input type="text" name='dob' value={formData.dob ? formData.dob : ""} onChange={submitHandler} className={styles.formInput} placeholder="Date of Birth of Child - dd/mm/yyyy" />
                        </div>

                        <div className={styles.formElement}>
                            <FaSchool className={styles.i} />
                            <input type="text" name='class_year' value={formData.class_year ? formData.class_year : ""} onChange={submitHandler} className={styles.formInput} placeholder="Year of Admission" />
                        </div>
                </div>
            </form>
            </div>
            <div className={styles.modalFooter}>
                <button onClick={props.onClose} className={styles.formbutton}>Close</button>
                <button onClick={props.addChild} className={styles.formbutton}>add </button>
            </div>
        </div>
    </div>
  )
}
