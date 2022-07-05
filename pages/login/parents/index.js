import Image from 'next/image';
import { useState } from 'react';
import styles from './parentsLogin.module.css';
import Link from 'next/link'

import { FaLock, FaUserShield } from "react-icons/fa";
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

    const login = e => {
        e.preventDefault();
        const { email_login: email, password_login: password } = formData;
        setFormData({})
    }



  return (
    <>
        <ToastContainer />
        <section className={styles.formcontainer}>
            <form onSubmit={submitHandler} className={styles.form}>
                <h2 className={styles.title}>Login to Search</h2>

                <div className={styles.formGroup}>
                    <div className={styles.fullElement}>
                        <FaUserShield className={styles.icon} />
                        <input className={styles.formInput} type="text" name='email_login' value={formData.email_login ? formData.email_login : ""} onChange={submitHandler} placeholder="Enter your Email" />
                    </div>

                    <div className={styles.fullElement}>
                        <FaLock className={styles.icon} />
                        <input className={styles.formInput} type="text" name='password_login' value={formData.password_login ? formData.password_login : ""} onChange={submitHandler} placeholder="Enter your Password" />
                    </div>
                </div>

                <div className={styles.buttons}> Dont have an account? <span><Link href='/registration/parents'> Register Here </Link></span> </div>

                <div>
                    <button variant="primary" type="submit" className={styles.formbutton} onClick={login}> Submit </button>
                </div>

            </form>
            <Image src="/Images/section.svg" height={500} width={300} />
        </section>
    </>
  )
}
