import React, { useState } from 'react'
import { FaCalendar, FaSchool, FaUser } from 'react-icons/fa'
import styles from './modal.module.css';
import { database } from '../../config/firebase'
import { addDoc, collection } from 'firebase/firestore'

export const Modal = (props) => {

    const [formData, setFormData] = useState({});
    const [ childList, setchildList ] = useState({});

    const submitHandler = e => {
        e.preventDefault();

        const {
            cname,
            dob,
            class_year,
        } = formData;
        const userdata = {
            cname,
            dob,
            class_year,   
        }

        setFormData(state => {
            return {
                ...state,
                [e.target.name]: e.target.value
            }
        })
        
        db.collection("child").add({
            userdata : userdata
        }).then(() => {
            alert("done");
        }).catch((error) => {
            alert(error.message);
        });

        setFormData({});
    };


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
                            <input type="text" name='cname' value={formData.cname ? formData.cname : ""} onChange={submitHandler} className={styles.formInput} placeholder="Name of Child" />
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
                <button onClick={submitHandler} className={styles.formbutton}>add </button>
            </div>
        </div>
    </div>
  )
}
