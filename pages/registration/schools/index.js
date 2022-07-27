import Image from 'next/image';
import { useState } from 'react';
import styles from './schoolRegisteration.module.css';

import { auth, database } from '../../../config/firebase'
import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import {
    ref,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";
import { storage } from "../../../config/firebase";

import { FaLock, FaUserCheck, FaSchool, FaUserShield } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IMaskInput } from 'react-imask';
import { useRouter } from 'next/router';

export default function Registration() {

    const [formData, setFormData] = useState({});
    const router = useRouter();

    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    const onChangeHandler = async(e) => {
        setFormData(state => {
            return {
                ...state,
                [e.target.name]: e.target.value
            }
        })
    }

    const handlePinChange = async (e) => {
        setFormData(formData => {
            return {
                ...formData,
                [e.target.name]: e.target.value
            }
        })
        if(e.target.value.length === 6) {
            console.log("Call API")
            const response = await fetch(`https://api.postalpincode.in/pincode/${e.target.value}`).then(res => res.json())
            if(response[0].Status === "Success") {
                const {Block, State} = response[0].PostOffice[0]
                setFormData(formData => {
                    return {
                        ...formData,
                        city: Block,
                        state: State
                    }
                })
            } else {
                toast.error("Please enter a valid pin code")
            }
        }
    }

    const handlePhotoChange = async (e) => {
        setFormData(formData => {
            return {
                ...formData,
                [e.target.name]: e.target.value
            }
        });

        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
            setImageUrls((prev) => [...prev, url]);
            });
        });

    }

    const register = e => {
        e.preventDefault();
        const {
            email_register: email,
            password_register: password,
            confirm_password_register: confirm_password,
            institute,
            type,
            living,
            gender,
            faculty,
            state,
            pin,
            address,
            endowment,
            level,
            city,
            principal
        } = formData;
        const schooldata = {
            living,
            type,
            gender,
            faculty,
            institute,
            state,
            pin,
            address,
            endowment,
            level,
            city,
            principal
        }

        toast.promise(
            createUserWithEmailAndPassword(auth, email, password)
                .then(user => {
                    updateProfile(user.user, {
                        displayName: institute
                    })
                    console.log(schooldata)
                    addDoc(collection(database, 'schools'), schooldata)
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
    <section className={styles.formcontainer}>
        <form onSubmit={onChangeHandler} className={styles.form}>

        <h2 className={styles.title}>Register Now</h2>

        <div className={styles.formGroup}>

            <div className={styles.fullElement}>
                <FaSchool className={styles.icon} />
                <input className={styles.formInput} type="text" name='type' value={formData.institute ? formData.institute : ""} onChange={onChangeHandler} placeholder="Institute Name" />
            </div>

            <div className={styles.radioLabel}>
                <IoMdSchool className={styles.icon} />
                <label style={{ color: "#aaa" }} className={styles.formInput} htmlFor="/"> Institute Type </label>
            </div>

            <div className={styles.radioButton}>
                <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="Pre School" name="type" /> Pre-School
                <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="School" name="type" /> School
            </div>

            {formData.type == 'School' &&
            <div>
            <div className={styles.formElement}>
            <IoMdSchool className={styles.i} />
                <select name="endowment" className={styles.formOption} onChange={onChangeHandler}>
                    <option className={styles.formInput} value="">Endowment</option>
                    <option name="endowment" value="Government School">Government School</option>
                    <option name="endowment" value="Government Aided Private School">Government Aided Private School</option>
                    <option name="endowment" value="Private School">Private School</option>
                    <option name="endowment" value="International School">International School</option>
                    <option name="endowment" value="Preschool">Preschool</option>
                    <option name="endowment" value="Home School">Home School</option>
                    <option name="endowment" value="National Open School">National Open School</option>
                    <option name="endowment" value="Special Needs School">Special Needs School</option>
                    <option name="endowment" value="KV">Kendriya Vidyalaya (KV)</option>
                    <option name="endowment" value="JNV">Jawahar Navodaya Vidyalaya (JNV)</option>
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

            <div className={styles.radioLabel}>
                <IoMdSchool className={styles.icon} />
                <label style={{ color: "#aaa" }} className={styles.formInput} htmlFor="/"> Living</label>
            </div>

            <div className={styles.radioButton}>
                <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="Day School" name="living" /> Day School
                <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="Boarding School" name="living" /> Boarding School
            </div>

            <div className={styles.radioLabel}>
                <IoMdSchool className={styles.icon} />
                <label style={{ color: "#aaa" }} className={styles.formInput} htmlFor="/"> Gender </label>
            </div>

            <div className={styles.radioButton}>
                <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="boys" name="gender" /> Boys
                <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="girls" name="gender" /> Girls
                <input className={styles.formInput} onChange={onChangeHandler} type="radio" value="Co Ed" name="gender" /> Co-Ed
            </div>

            

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

        <div className={styles.formElement}>
            <GiPositionMarker className={styles.i} />
            <input type="text" name='address' value={formData.address ? formData.address : ""} onChange={onChangeHandler} className={styles.formInput} placeholder="Address" />
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
                onChange={handlePinChange}
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

        <div className={styles.formElement}>
            <FaUserCheck className={styles.i} />
            <input type="email" name='email_register' value={formData.email_register ? formData.email_register : ""} onChange={onChangeHandler} className={styles.formInput} placeholder="Your Email" />
        </div>

        <div className={styles.formElement}>
            <FaLock className={styles.i} />
            <input type="password" name='password_register' value={formData.password_register ? formData.password_register : ""} onChange={onChangeHandler} className={styles.formInput} placeholder="Password" />
        </div>

        <div className={styles.formElement}>
            <FaUserShield className={styles.i} />
            <input type="password" name='confirm_password_register' value={formData.confirm_password_register ? formData.confirm_password_register : ""} onChange={onChangeHandler} className={styles.formInput} placeholder="Confirm Password" />
        </div>

        <div className={styles.formElement}>
        Choose Faculty
            <input
                type="file"
                name="principal"
                onChange={(event) => {
                setImageUpload(event.target.files[0]);
                }}
            />
        </div>

    </div>
        <button variant="primary" type="submit" onClick={register} className={styles.formbutton}>
            Submit
        </button>

        </form>
        <Image src="/Images/section.svg" height={400} width={400} />
    </section>
    </>
  )
}

