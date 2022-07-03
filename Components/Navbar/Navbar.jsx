import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react";
import styles from './navbar.module.css'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    
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
                        <li> <Link href={'/'}>Home</Link></li>
                        <li> <Link href={'/'}>Home</Link></li>
                        <li> <Link href={'/registeration/schools'}>Are you a School? </Link></li>
                    </ul>
                    <div className={styles.navbarButton}>
                        <Link href={'/registeration/parents'}>
                            <a className={styles.button1}>Sign Up</a>
                        </Link>
                            <button className={styles.button2}>Search</button>
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