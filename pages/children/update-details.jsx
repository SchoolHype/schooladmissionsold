import { useState } from 'react';
import styles from './children.module.css';
import Router, {useRouter} from 'next/router'

import { auth, database } from '../../config/firebase'
import { addDoc, collection } from 'firebase/firestore'

import { FaUser, FaCalendar, FaSchool } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdSchool } from 'react-icons/io';
import Link from 'next/link';

export default function Registration() {

    const [formData, setFormData] = useState({});
    const router = useRouter();
    

    const onChangeHandler = e => {
        setFormData(state => {
            return {
                ...state,
                [e.target.name]: e.target.value
            }
        })
        
    }

    const submit = async (e) => {
        e.preventDefault();
        //Check if all the fields are present
        const {name, dateofbirth, class_year, living, type, level, gender, faculty} = formData

        if (!(dateofbirth && name && class_year && living && type && level && gender && faculty)) {
            toast.error("Please enter all of the details")
            return;
        }

        const childDetails = {
            ...formData,
        }

        const childRef = await toast.promise(addDoc(collection(database, 'child'), childDetails), 
        {pending: "Saving Data", success: "Data saved" , error: "Error while saving data"})
        .then(() => {
            router.push('/')
        })

    }

  return (
    <>
    <ToastContainer />
    <h2 className={styles.title}>Child Details</h2>

        <form action="" className={styles.form}>

        <div className={styles.formCard}> 
            <div className={styles.formTitles}>
                <h2>Enter Child Details</h2>
            </div>

            <div className={styles.formGroup}>
                <div className={styles.formElement}>
                    <FaUser className={styles.i} />
                    <input type="text" name='name' value={formData.name ? formData.name : ""} onChange={onChangeHandler} className={styles.formInput} placeholder="Name" />
                </div>

                <div className={styles.formElement}>
                    <FaCalendar className={styles.i} />
                    <input type="date" name='dateofbirth' value={formData.dateofbirth ? formData.dateofbirth : ""} onChange={onChangeHandler} className={styles.formDate} placeholder="Date of Birth of Child - dd/mm/yyyy" />
                </div>

                <div className={styles.formElement}>
                    <FaSchool className={styles.i} />
                    <input type="number" name='class_year' value={formData.class_year ? formData.class_year : ""} onChange={onChangeHandler} className={styles.formInput} placeholder="Year of Admission" />
                </div>
                
                <br />
            </div>
        </div>

        
        <div className={styles.formCard}>
            <div className={styles.formTitles}>
                <h2>Enter Preferences</h2>
            </div>
            <div className={styles.formGroup}>
            <div className={styles.radioLabel}>
                <IoMdSchool className={styles.icon} />
                <label style={{ color: "#aaa" }} className={styles.formInput} htmlFor="/"> Institute Type </label>
            </div>

            <div className={styles.radioButton}>
                <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="Pre School" name="type" /> Pre-School
                <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="School" name="type" /> School
            </div>
            </div>
            
            {formData.type == 'School' &&
            <div className={styles.formGroup}>
            <div className={styles.formElement}>
            <IoMdSchool className={styles.i} />
                <select name="endowment" className={styles.formOption} onChange={onChangeHandler}>
                    <option className={styles.formInput} value="">Endowment</option>
                    <option name="endowment" value="Government School">Government School</option>
                    <option name="endowment" value="Government Aided Private">Government Aided Private</option>
                    <option name="endowment" value="Private School">Private School</option>
                    <option name="endowment" value="International School">International School</option>
                    <option name="endowment" value="Preschool">Preschool</option>
                    <option name="endowment" value="Home School">Home School</option>
                    <option name="endowment" value="National Open ">National Open </option>
                    <option name="endowment" value="Special Needs ">Special Needs </option>
                    <option name="endowment" value="KV">KV</option>
                    <option name="endowment" value="JNV">JNV</option>
                    <option name="endowment" value="Sainik School">Sainik School</option>
                </select>
            </div>

            <div className={styles.formElement}>
            <IoMdSchool className={styles.i} />
                <select name="level" className={styles.formOption} onChange={onChangeHandler}>
                    <option className={styles.formInput} value="">Level</option>
                    <option name="level" value="Pre-Primary">Pre-Primary</option>
                    <option name="level" value="Primary">Primary</option>
                    <option name="level" value="Middle">Middle</option>
                    <option name="level" value="Secondary">Secondary</option>
                    <option name="level" value="Senior-Secondary"> Senior-Seconday</option>
                </select>
            </div>

            <br />

            <div className={styles.radioLabel}>
                <IoMdSchool className={styles.icon} />
                <label style={{ color: "#aaa" }} className={styles.formInput} htmlFor="/"> Living</label>
            </div>

            <div className={styles.radioButton}>
                <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="Day School" name="living" /> Day School
                <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="Boarding School" name="living" /> Boarding School
            </div>

            <br />

            <div className={styles.radioLabel}>
                <IoMdSchool className={styles.icon} />
                <label style={{ color: "#aaa" }} className={styles.formInput} htmlFor="/"> Gender </label>
            </div>

            <div className={styles.radioButton}>
                <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="boys" name="gender" /> Boys
                <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="girls" name="gender" /> Girls
                <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="Co Ed" name="gender" /> Co-Ed
            </div>
            <br />

            <div className={styles.radioLabel}>
                <IoMdSchool className={styles.icon} />
                <label style={{ color: "#aaa" }} className={styles.formInput} htmlFor="/"> Faculty </label>
            </div>

            <div className={styles.radioButton}>
                <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="science" name="faculty" /> Science
                <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="commerce" name="faculty" /> Commerce
                <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="humaniites" name="faculty" /> Humanities
            </div>
            </div>
            }
            

            </div>

        <div className={styles.loginbutton}> Already Have an account? <span><Link href='/login/parents'> Login Here </Link></span> </div>

        <button type='submit' className={styles.formbutton} onClick={submit}> 
            Submit
        </button>

        </form>

    </>
  )
}




