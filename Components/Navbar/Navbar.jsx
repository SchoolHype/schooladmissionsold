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

                    <h5 className={styles.logoText}><Link href="/">School Admissions</Link></h5>

                <div className={styles.navLinks}>
                    <ul className={
                        !isOpen ? styles.ul : `${styles.ul} ${styles.active}`}
                        onClick={() => setIsOpen(false)}>
                        <li> <Link href={'/'}>Home</Link></li>
                        <li> <Link href={'/'}>Home</Link></li>
                        <li> <Link href={'/'}>Home </Link></li>
                        <li> <Link href={'/'}>Home </Link></li>
                        <div className={styles.navbarButton}>
                        <button className={styles.button2}>Search</button>
                        </div>
                    </ul>
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