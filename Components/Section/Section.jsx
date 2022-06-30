import React from 'react'
import styles from "./section.module.css";
import Image from "next/image";

const Section= ({ children, imgSrc, reverse = false }) => {
    let className = `${styles.section}`;
    if (reverse) className += ` ${styles.sectionReversed}`;

    return (
        <div className={className} >
            
            <div className={styles.textSection}>
                {children}
                <a className={styles.sectionButton}> Learn More </a>
            </div>

            <div className={styles.imageSection}>
                    <Image className={styles.img} src={imgSrc} height={400} width={400} />
            </div>
        </div>
    );
};

export default Section