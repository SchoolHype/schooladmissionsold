import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react";
import styles from './navbar.module.css'
import { useUserAuth } from '../../context/userAuthContext';
import { useRouter } from 'next/router';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);

    const {user} = useUserAuth();
    const {logout} = useUserAuth();
    const router = useRouter();

    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.branding}>
                    <Image src='/Images/logo.jpg' className={styles.logoImage} height={40} width={100} />
                    <h5 className={styles.logoText}><Link href="/">School Admissions</Link></h5>
                </div>

                <div className={styles.navLinks}>
                    <ul className={
                        !isOpen ? styles.ul : `${styles.ul} ${styles.active}`}
                        onClick={() => setIsOpen(false)}>
                        <li> <Link href={'/'}>Home</Link></li>
                        <li> <Link href={'/'}>Blogs</Link></li>
                        <li> <Link href={'/parental-guidance'}>Parental Guidance</Link></li>
                    </ul>
                    <div className={styles.navbarButton}>
                        {user ? 
                        <div className={styles.avatar}>
                            <div className={styles.icon}>
                            {user.photoURL ? <Image src={user.photoURL} height={30} width={30} priority/> : <FaUser />}
                            </div>
                            <div className={styles.details}>
                            <p>{user.displayName ? user.displayName : user.email}</p>
                            <button onClick={() => { logout(); router.push('/') }}>Log Out</button>
                            </div>
                        </div>
                        :  <Link href={'/registration/parents'}>
                            <a className={styles.button1}> Parent Registration </a>
                            </Link>
                        }
                    </div>
                    <button
                        className={
                            isOpen === false
                                ? styles.hamburger
                                : styles.hamburger + " " + styles.active
                        }
                        onClick={openMenu}
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar