import Image from 'next/image';
import { useState } from 'react';
import styles from './parentsLogin.module.css';
import Link from 'next/link'

import { FaLock, FaUserShield } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { auth } from '../../../config/firebase'
import { signInWithEmailAndPassword, onAuthStateChanged, getAuth  } from 'firebase/auth'

import { useRouter } from 'next/router'
import { useUserAuth } from '../../../context/userAuthContext';

export default function Login() {

    const [formData, setFormData] = useState({
        email : "",
        password : ""
    });

    const {user, signIn} = useUserAuth();

    const router = useRouter();

    const login = async(e) => {
        e.preventDefault();

        console.log(user)
        try {
        await signIn(formData.email, formData.password)
        router.push('/search')
        } catch (err) {
        console.log(err)
        }
        
    }
    
  return (
    <>
        <ToastContainer />
        <section className={styles.formcontainer}>
            <form onSubmit={login} className={styles.form}>
                <h2 className={styles.title}>Login to Search</h2>

                <div className={styles.formGroup}>
                    <div className={styles.fullElement}>
                        <FaUserShield className={styles.icon} />
                        <input className={styles.formInput} type="text" name='email' value={formData.email} placeholder="Enter your Email"
                        onChange = {(e) =>
                            setFormData({
                                ...formData,
                                email: e.target.value,
                            })
                            }  />
                    </div>

                    <div className={styles.fullElement}>
                        <FaLock className={styles.icon} />
                        <input className={styles.formInput} type="password" name='password' value={formData.password} placeholder="Enter your Password" 
                             onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    password: e.target.value,
                                })
                                }
                        />
                    </div>
                </div>

                <div className={styles.buttons}> Dont have an account? <span><Link href='/registration/parents'> Register Here </Link></span> </div>

                <div>
                    <button variant="primary" type="submit" className={styles.formbutton}> Submit </button>
                </div>

            </form>
            <Image src="/Images/section.svg" height={500} width={300} />
        </section>
    </>
  )
}
