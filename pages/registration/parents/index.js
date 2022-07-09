import { useState } from 'react';
import styles from './parentRegisteration.module.css';
import {useRouter} from 'next/router'


import { auth, database } from '../../../config/firebase'
import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

import { FaUser, FaLock, FaUserCheck, FaPhoneAlt, FaUserShield } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IMaskInput } from 'react-imask'
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

    const register = e => {
        e.preventDefault();
        const {
            password_register: password,
            confirm_password_register: confirm_password,
            name_register : name,
            email_register: email,
            phone,
            relationship,
            state,
            pin,
            city
        } = formData;
        const userdata = {
            name,
            email,
            phone,
            phone,
            relationship,
            state,
            pin,
            city  
        }
        if (!(name && phone && relationship && pin)) {
            toast.error("Enter all details")
            return
        }
        if (!verifyEmail(email)) {
            toast.error("Enter a valid email")
            return
        }
        if (password !== confirm_password) {
            toast.error("Passwords don\'t match")
            return
        }
        
        toast.promise(
            createUserWithEmailAndPassword(auth, email, password)
                .then(user => {
                    updateProfile(user.user, {
                        displayName: name
                    })
                    console.log(userdata)
                    addDoc(collection(database, 'users'), userdata)
                        .catch(err => 'Error while adding details')
                })
                .catch(error => {
                    if (error.code === 'auth/weak-password') {
                        toast.error("Please enter a stronger password atleast 6 characters long")
                        throw 'weak-password'
                    } else if (error.code === 'auth/email-already-in-use') {
                        toast.info("Email is already registered. Please Sign In")
                        throw 'email-exists'
                    }
                    console.log(error)
                }),
            {
                pending: 'Creating user',
                error: 'Error while creating user!',
                success: 'User created successfully'
            }
        ).then(() => {
            router.push('/')
        })
    }

    const verifyEmail = email => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/g
        return regex.test(email)
    }


  return (
    <>
    <ToastContainer />
    <h2 className={styles.title}>Register Now</h2>

        <form action="" className={styles.form}>

        <div className={styles.formCard}> 
            <div className={styles.formTitles}>
                <h2>Enter Contact Details</h2>
            </div>

            <div className={styles.formGroup}>
                <div className={styles.formElement}>
                    <FaUser className={styles.i} />
                    <input type="text" name='name_register' value={formData.name_register ? formData.name_register : ""} onChange={onChangeHandler} className={styles.formInput} placeholder="Name" />
                </div>

                <div className={styles.formElement}>
                    <FaUserCheck className={styles.i} />
                    <input type="email" name='email_register' value={formData.email_register ? formData.email_register : ""}  onChange={onChangeHandler} className={styles.formInput} placeholder="Email" />
                </div>

                <div className={styles.formElement}>
                    <FaPhoneAlt className={styles.i} />
                    <IMaskInput
                        name='phone'
                        value={formData.phone ? formData.phone : ""}
                        mask={"{+91} 00000-00000"}
                        radix="."
                        unmask={true}
                        placeholder="Phone No"
                        className={styles.formInput}
                        onAccept={
                            (data, mask) => onChangeHandler({ target: { name: 'phone', value: data } })
                        }
                    />
                </div>

                <div className={styles.radioLabel}>
                    <IoMdSchool className={styles.icon} />
                    <label style={{ color: "#aaa" }} className={styles.formInput} htmlFor="/"> Relationship to Child</label>
                </div>

                <div className={styles.radioButton}>
                    <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="Father" name="relationship" /> Father
                    <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="Mother" name="relationship" /> Mother
                    <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="Guardian" name="relationship" /> Guardian
                </div>
                
                <br />
                
                <div className={styles.formElement}>
                    <FaLock className={styles.i} />
                    <input type="password" name='password_register' value={formData.password_register ? formData.password_register : ""} onChange={onChangeHandler} className={styles.formInput} placeholder="Password" />
                </div>

                <div className={styles.formElement}>
                    <FaUserShield className={styles.i} />
                    <input type="password" name='confirm_password_register' value={formData.confirm_password_register ? formData.confirm_password_register : ""} onChange={onChangeHandler} className={styles.formInput} placeholder="Confirm Password" />
                </div>

            </div>
        </div>
 
        <div className={styles.formCard}>
                <div className={styles.formTitles}>
                        <h2>Enter Address Details</h2>
                </div>

                <div className={styles.formGroup}>

                    <div className={styles.formElement}>
                        <GiPositionMarker className={styles.i} />
                        <IMaskInput
                            name='pin'
                            value={formData.pin ? formData.pin : ""}
                            mask={"000000"}
                            radix="."
                            unmask={true}
                            placeholder="Pin Code"
                            className={styles.formInput}
                            onAccept={
                                (data, mask) => onChangeHandler({ target: { name: 'pin', value: data } })
                            }
                        />
                    </div>

                    <div className={styles.formElement}>
                    <GiPositionMarker className={styles.i} />
                    <input type="text" name='state' value={formData.state ? formData.state : ""} onChange={onChangeHandler} className={styles.formInput} placeholder="State" />
                    </div>

                    <div className={styles.formElement}>
                            <GiPositionMarker className={styles.i} />
                            <input type="text" name='city' value={formData.city ? formData.city : ""} onChange={onChangeHandler} className={styles.formInput} placeholder="City/Village/Town" />
                    </div>
                </div>
        </div>

        <div className={styles.loginbutton}> Already Have an account? <span><Link href='/login/parents'> Login Here </Link></span> </div>

        <button type='submit' className={styles.formbutton} onClick={register}> 
            Submit
        </button>

        </form>

    </>
  )
}




//<div className={styles.formGroup}>
//            <div className={styles.formElement}>
//                    <FaUser className={styles.i} />
//                    <input type="text" name='name' value={formData.name ? formData.name : ""} onChange={onChangeHandler} className={styles.formInput} placeholder="Name of Child" />
//                </div>
//
//                <div className={styles.formElement}>
//                    <FaCalendar className={styles.i} />
//                    <input type="text" name='dob' value={formData.dob ? formData.dob : ""} onChange={onChangeHandler} className={styles.formInput} placeholder="Date of Birth of Child - dd/mm/yyyy" />
//                </div>
//
//                <div className={styles.formElement}>
//                    <FaSchool className={styles.i} />
//                    <input type="text" name='class_year' value={formData.class_year ? formData.class_year : ""} onChange={onChangeHandler} className={styles.formInput} placeholder="Year of Admission" />
//                </div>
//            </div>