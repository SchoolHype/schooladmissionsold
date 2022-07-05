import React from 'react'
import styles from './heroSection.module.css'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = ({ imgSrc, children }) => {
    return (
        <>
            <section className={styles.heroSection}>
                <div className={styles.textWrapper}>
                    {children}
                    <Link href='/registration/parents'>
                        <button className={styles.registerButton}>Register</button>
                    </Link>

                    <Link href='/login/parents'>
                        <button className={styles.searchButton}>Search</button>
                    </Link>
                </div>
                <div className={styles.imageWrapper}>
                    <Image className='hero' src={imgSrc} height={1000} width={1000} />
                </div>
            </section>

        </>
    )
}

export default HeroSection