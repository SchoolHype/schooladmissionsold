import Image from 'next/image';
import { useState } from 'react';
import styles from './schoolRegisteration.module.css';

import { FaUser, FaLock, FaUserCheck, FaSchool, FaUserShield } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IMaskInput } from 'react-imask';

export default function Registration() {

    const [formData, setFormData] = useState({});

    const submitHandler = async(e) => {
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
            email_register: email,
            password_register: password,
            confirm_password_register: confirm_password,
            institute,
            living,
            gender,
            faculty,
            state,
            district,
            pin,
            address,
            endowment,
            level,
            city
        } = formData;
        const userdata = {
            living,
            gender,
            faculty,
            institute,
            institutionType,
            state,
            district,
            pin,
            address,
            endowment,
            level,
            city
        }
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
                <input className={styles.formInput} type="text" name='institute' value={formData.institute ? formData.institute : ""} onChange={submitHandler} placeholder="Institute Name" />
            </div>

            <div className={styles.formElement}>
            <IoMdSchool className={styles.i} />
                <select name="endowment" className={styles.formOption}>
                    <option name="endowment" value="">Endowment</option>
                    <option name="endowment" value="Pre-Primary">Pre-Primary</option>
                    <option name="endowment" value="PRimary">PRimary</option>
                    <option name="endowment" value="Middle">Middle</option>
                </select>
            </div>

            <div className={styles.formElement}>
            <IoMdSchool className={styles.i} />
                <select name="level" className={styles.formOption}>
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
                <input className={styles.formInput} onChange={submitHandler} type="radio" value="Day School" name="living" /> Day School
                <input className={styles.formInput} onChange={submitHandler} type="radio" value="Boarding School" name="living" /> Boarding School
            </div>

            <div className={styles.radioLabel}>
                <IoMdSchool className={styles.icon} />
                <label style={{ color: "#aaa" }} className={styles.formInput} htmlFor="/"> Gender </label>
            </div>

            <div className={styles.radioButton}>
                <input className={styles.formInput} onChange={submitHandler} type="radio" value="boys" name="gender" /> Boys
                <input className={styles.formInput} onChange={submitHandler} type="radio" value="girls" name="gender" /> Girls
                <input className={styles.formInput} onChange={submitHandler} type="radio" value="Co Ed" name="gender" /> Co-Ed
            </div>

            

            <div className={styles.radioLabel}>
                <IoMdSchool className={styles.icon} />
                <label style={{ color: "#aaa" }} className={styles.formInput} htmlFor="/"> Faculty </label>
            </div>

            <div className={styles.radioButton}>
                <input className={styles.formInput} onChange={submitHandler} type="radio" value="science" name="faculty" /> Science
                <input className={styles.formInput} onChange={submitHandler} type="radio" value="commerce" name="faculty" /> Commerce
                <input className={styles.formInput} onChange={submitHandler} type="radio" value="humaniites" name="faculty" /> Humanities
            </div>

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

        <div className={styles.formElement}>
            <FaUserCheck className={styles.i} />
            <input type="email" name='email_register' value={formData.email_register ? formData.email_register : ""} onChange={submitHandler} className={styles.formInput} placeholder="Your Email" />
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
        <button variant="primary" type="submit" onClick={register} className={styles.formbutton}>
            Submit
        </button>

        </form>
        <Image src="/Images/section.svg" height={400} width={400} />
    </section>
    </>
  )
}
