import Image from 'next/image';
import { useState } from 'react';
import styles from './parentRegisteration.module.css';

import { FaUser, FaLock, FaUserCheck, FaPhoneAlt, FaUserShield, FaCalendar, FaSchool } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IMaskInput } from 'react-imask'

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
        <form onSubmit={submitHandler} className={styles.form}>

        <h2 className={styles.title}>Register Now</h2>

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

            <div className={styles.formElement}>
                <FaUser className={styles.i} />
                <input type="text" name='father_name' value={formData.father_name ? formData.father_name : ""} onChange={submitHandler} className={styles.formInput} placeholder="Name of Father" />
            </div>

            <div className={styles.formElement}>
                <FaUserCheck className={styles.i} />
                <input type="email" name='father_email_register' value={formData.father_email_register ? formData.father_email_register : ""}  onChange={submitHandler} className={styles.formInput} placeholder="Father Email" />
            </div>

            <div className={styles.formElement}>
                <FaPhoneAlt className={styles.i} />
                <IMaskInput
                    name='father_phone'
                    value={formData.father_phone ? formData.father_phone : ""}
                    mask={"{+91} 00000-00000"}
                    radix="."
                    unmask={true}
                    placeholder="Father Phone No"
                    className={styles.formInput}
                    onAccept={
                        (data, mask) => submitHandler({ target: { name: 'father_phone', value: data } })
                    }
                />
            </div>

            <div className={styles.formElement}>
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
            </div>

            <div className={styles.formElement}>
                <GiPositionMarker className={styles.i} />
                <input type="text" name='address' value={formData.address ? formData.address : ""} onChange={submitHandler} className={styles.formInput} placeholder="Address" />
            </div>

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
        <Image className={styles.image} src='/Images/section.svg' height={400} width={400}/>
    </section>
    </>
  )
}
