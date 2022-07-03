import Image from 'next/image';
import { useState } from 'react';
import styles from './schoolRegisteration.module.css';

import { FaUser, FaLock, FaUserCheck, FaSchool } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Registration() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const submitHandler = async(e) => {
        e.preventDefault();

        if (!(password && email && name)) {
            toast.error('Please enter all the details')
            return
        }

        setName("");
        setEmail("");
        setPassword("");
    }

  return (
    <>
    <ToastContainer />
    <section className={styles.formcontainer}>
        <form onSubmit={submitHandler} className={styles.form}>

        <h2 className={styles.title}>Register Now</h2>

        <div className={styles.formGroup}>

            <div className={styles.fullElement}>
                <FaSchool className={styles.icon} />
                <input className={styles.formInput} type="text" name='institute'  onChange={submitHandler} placeholder="Institute Name" />
            </div>

            <div className={styles.radioLabel}>
                <IoMdSchool className={styles.icon} />
                <label style={{ color: "#aaa" }} className={styles.formInput} htmlFor="/"> Choose Institution Type</label>
            </div>

            <div className={styles.radioButton}>
                <input className={styles.formInput} onChange={submitHandler} type="radio" value="school" name="institutionType" /> School
                <input className={styles.formInput} onChange={submitHandler} type="radio" value="preschool" name="institutionType" />Preschool
            </div>

            <div className={styles.formElement}>
            <FaUser className={styles.i} />
                <input
                    className={styles.formInput} 
                    type="text" 
                    placeholder="Enter your Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className={styles.formElement}>
            <FaUserCheck className={styles.i} />
                <input
                    className={styles.formInput} 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

        <div className={styles.formElement}>
        <FaLock className={styles.i} />
            <input
                className={styles.formInput} 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>

</div>
        <button variant="primary" type="submit" className={styles.formbutton}>
            Submit
        </button>

        </form>
        <Image className={styles.image} src='/Images/section.svg' height={400} width={400}/>
    </section>
    </>
  )
}
