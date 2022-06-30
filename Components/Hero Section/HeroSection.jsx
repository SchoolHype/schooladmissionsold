import React from 'react'
import styles from './heroSection.module.css'
import Image from 'next/image'

const HeroSection = ({ imgSrc, children }) => {
    return (
        <>
            <section className={styles.heroSection}>
                <div className={styles.textWrapper}>
                    {children}
                    <button className={styles.registerButton}>Register</button>
                    <button className={styles.searchButton}>Search</button>
                </div>
                <div className={styles.imageWrapper}>
                    <Image className='hero' src={imgSrc} height={1000} width={1000} />
                </div>
            </section>

        </>
    )
}

export default HeroSection