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

                    <Link href='/search'>
                        <button className={styles.searchButton}>Search</button>
                    </Link>
                </div>
                <div className={styles.imageWrapper}>
                    <Image className='hero' src={imgSrc} height={400} width={600} alt="" />
                </div>
            </section>

        </>
    )
}

export default HeroSection