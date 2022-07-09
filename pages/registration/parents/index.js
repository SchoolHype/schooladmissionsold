import Image from 'next/image';
import { useState } from 'react';
import styles from './parentRegisteration.module.css';
import {useRouter} from 'next/router'


import { auth, database } from '../../../config/firebase'
import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

import { FaUser, FaLock, FaUserCheck, FaPhoneAlt, FaUserShield, FaCalendar, FaSchool } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IMaskInput } from 'react-imask'
import { IoMdSchool } from 'react-icons/io';

export default function Registration() {

    const [formData, setFormData] = useState({});
    const router = useRouter();
    

    const submitHandler = e => {
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
            father_name_register : father_name,
            father_email_register: father_email,
            father_phone,
            relationship,
            address,
            state,
            district,
            pin,
            city
        } = formData;
        const userdata = {
            father_name,
            father_email,
            father_phone,
            father_phone,
            relationship,
            address,
            state,
            district,
            pin,
            city  
        }
        if (!verifyEmail(father_email)) {
            toast.error("Enter a valid email")
            return
        }
        if (password !== confirm_password) {
            toast.error("Passwords don\'t match")
            return
        }
        
        toast.promise(
            createUserWithEmailAndPassword(auth, father_email, password)
                .then(user => {
                    updateProfile(user.user, {
                        displayName: father_name
                    })
                    addDoc(collection(database, 'register'), userdata)
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
            router.back()
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
                <h2>Enter Parent Details</h2>
            </div>

            <div className={styles.formGroup}>
                    <div className={styles.formElement}>
                        <FaUser className={styles.i} />
                        <input type="text" name='father_name' value={formData.father_name ? formData.father_name : ""} onChange={submitHandler} className={styles.formInput} placeholder="Name" />
                    </div>

                    <div className={styles.formElement}>
                        <FaUserCheck className={styles.i} />
                        <input type="email" name='father_email_register' value={formData.father_email_register ? formData.father_email_register : ""}  onChange={submitHandler} className={styles.formInput} placeholder="Email" />
                    </div>

                    <div className={styles.formElement}>
                        <FaPhoneAlt className={styles.i} />
                        <IMaskInput
                            name='father_phone'
                            value={formData.father_phone ? formData.father_phone : ""}
                            mask={"{+91} 00000-00000"}
                            radix="."
                            unmask={true}
                            placeholder="Phone No"
                            className={styles.formInput}
                            onAccept={
                                (data, mask) => submitHandler({ target: { name: 'father_phone', value: data } })
                            }
                        />
                    </div>

                    <div className={styles.radioLabel}>
                        <IoMdSchool className={styles.icon} />
                        <label style={{ color: "#aaa" }} className={styles.formInput} htmlFor="/"> Relationship to Child</label>
                    </div>

                    <div className={styles.radioButton}>
                        <input className={styles.formInput} onChange={submitHandler} type="radio" value="Father" name="relationship" /> Father
                        <input className={styles.formInput} onChange={submitHandler} type="radio" value="Mother" name="relationship" /> Mother
                        <input className={styles.formInput} onChange={submitHandler} type="radio" value="Guardian" name="relationship" /> Guardian
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
                    <input type="text" name='address' value={formData.address ? formData.address : ""} onChange={submitHandler} className={styles.formInput} placeholder="Address" />
                    </div>

                    <div className={styles.formElement}>
                    <GiPositionMarker className={styles.i} />
                    <input type="text" name='state' value={formData.state ? formData.state : ""} onChange={submitHandler} className={styles.formInput} placeholder="State" />
                    </div>

                    <div className={styles.formElement}>
                        <GiPositionMarker className={styles.i} />
                        <input type="text" name='district' value={formData.district ? formData.district : ""} onChange={submitHandler} className={styles.formInput} placeholder="District" />
                    </div>

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
                                (data, mask) => submitHandler({ target: { name: 'pin', value: data } })
                            }
                        />
                    </div>

                        <div className={styles.formElement}>
                                <GiPositionMarker className={styles.i} />
                                <input type="text" name='city' value={formData.city ? formData.city : ""} onChange={submitHandler} className={styles.formInput} placeholder="City/Village/Town" />
                        </div>
                    </div>
        </div>

            

        <div className={styles.formGroup}>
            <div className={styles.formElement}>
                <FaLock className={styles.i} />
                <input type="password" name='password_register' value={formData.password_register ? formData.password_register : ""} onChange={submitHandler} className={styles.formInput} placeholder="Password" />
            </div>

            <div className={styles.formElement}>
                <FaUserShield className={styles.i} />
                <input type="password" name='confirm_password_register' value={formData.confirm_password_register ? formData.confirm_password_register : ""} onChange={submitHandler} className={styles.formInput} placeholder="Confirm Password" />
            </div>
        </div>

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
//                    <input type="text" name='name' value={formData.name ? formData.name : ""} onChange={submitHandler} className={styles.formInput} placeholder="Name of Child" />
//                </div>
//
//                <div className={styles.formElement}>
//                    <FaCalendar className={styles.i} />
//                    <input type="text" name='dob' value={formData.dob ? formData.dob : ""} onChange={submitHandler} className={styles.formInput} placeholder="Date of Birth of Child - dd/mm/yyyy" />
//                </div>
//
//                <div className={styles.formElement}>
//                    <FaSchool className={styles.i} />
//                    <input type="text" name='class_year' value={formData.class_year ? formData.class_year : ""} onChange={submitHandler} className={styles.formInput} placeholder="Year of Admission" />
//                </div>
//            </div>