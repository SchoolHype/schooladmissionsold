import React from 'react'
import styles from './section.module.css'
import Image from 'next/image'

const Section = ({ imgSrc, children }) => {
    return (
        <>
            <section className={$className}>
                <div className={styles.$textContent}>
                    {children}
                </div>
                <div className={styles.$imageContent}>
                    <Image src={imgSrc} height={500} width={500} />
                </div>
            </section>

        </>
    )
}

export default Section