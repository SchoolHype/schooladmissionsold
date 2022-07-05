import Image from 'next/image';
import { useState } from 'react';
import styles from './parentRegisteration.module.css';

import { FaUser, FaLock, FaUserCheck, FaPhoneAlt, FaUserShield, FaCalendar, FaSchool } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IMaskInput } from 'react-imask'
import { IoMdSchool } from 'react-icons/io';

export default function Registration() {

    const [formData, setFormData] = useState({});

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
            mother_name_register : mother_name,
            mother_email_register: mother_email,
            mother_phone,
            dob,
            class_year,
            address 
        } = formData;
        const userdata = {
            father_name,
            father_email,
            father_phone,
            mother_email,
            mother_name,
            mother_phone,
            dob,
            class_year,
            address   
        }
        if (!(father_name && father_phone && mother_name && mother_phone && dob && address)) {
            toast.error('Please enter all the details')
            return
        }
        if (!verifyEmail(father_email && mother_email)) {
            toast.error("Enter a valid email")
            return
        }
        if (password !== confirm_password) {
            toast.error("Passwords don\'t match")
            return
        }
        console.log(formData);
        setFormData("")
    }

    const verifyEmail = email => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/g
        return regex.test(email)
    }


  return (
    <>
    <ToastContainer />
    <section className={styles.formcontainer}>
        <div className={styles.formTitles}>
            <h3> Parent Details </h3>
            <h3> Address </h3>
            <h3> Child Details </h3>
        </div>

        <hr />

        <form onSubmit={submitHandler} className={styles.form}>

        <h2 className={styles.title}>Register Now</h2>

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


            {/*<div className={styles.formElement}>
                <FaUser className={styles.i} />
                <input type="text" name='mother_name' value={formData.mother_name ? formData.mother_name : ""} onChange={submitHandler} className={styles.formInput} placeholder="Name of Mother" />
            </div>

            <div className={styles.formElement}>
                <FaUserCheck className={styles.i} />
                <input type="email" name='mother_email_register' value={formData.mother_email_register ? formData.mother_email_register : ""}  onChange={submitHandler} className={styles.formInput} placeholder="Mother Email" />
            </div>

            <div className={styles.formElement}>
                <FaPhoneAlt className={styles.i} />
                <IMaskInput
                    name='mother_phone'
                    value={formData.mother_phone ? formData.mother_phone : ""}
                    mask={"{+91} 00000-00000"}
                    radix="."
                    unmask={true}
                    placeholder="Mother Phone No"
                    className={styles.formInput}
                    onAccept={
                        (data, mask) => submitHandler({ target: { name: 'mother_phone', value: data } })
                    }
                />
            </div> */}
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

        <button variant="primary" type="submit" className={styles.formbutton} onClick={register}> 
            Submit
        </button>

        </form>
    </section>
    </>
  )
}
