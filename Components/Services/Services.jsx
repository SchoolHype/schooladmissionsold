import React from 'react'
import styles from './services.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Services = ({ imgSrc, children }) => {

    const services = [
        {
            "id" : 1,
            "image" : 'Images/service.svg',
            "title" : "Join Us",
            "serviceTitle" : "Guide For Parents",
            "text": "We focus on ergonomics and meeting you where you work. It's only a  keystroke away.",
            "src": "/parental-guidance"
        },

        {
            "id" : 1,
            "image" : 'Images/service.svg',
            "title" : "Join Us",
            "serviceTitle" : "Blogs for Parents",
            "text": "We focus on ergonomics and meeting you where you work. It's only a  keystroke away.",
            "src": "/blogs"
        },

        {
            "id" : 1,
            "image" : 'Images/service.svg',
            "title" : "Join Us",
            "serviceTitle" : "School Registration",
            "text": "We focus on ergonomics and meeting you where you work. It's only a  keystroke away.",
            "src": "/registration/schools"
        }
    ]

    return (
        <>
            <section className={styles.servicesSection}>

                <div className={styles.servicesTitle}>
                <br /> <br /> <br />
                    <h5>Practice Advice</h5>
                    <h1>One Stop Place for All</h1>
                    <p>Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: Newtonian mechanics  </p>
                </div>  

                <div className={styles.gridcard}>
                    {services.map((el , i) => (
                        <div className={styles.card} key={i}>
                            <img className={styles.testimage} src={el.image} alt='aptitude test' />
                            <h5 className={styles.testtitle}>{el.title}</h5>
                            <h4 className={styles.serviceTitle}>{el.serviceTitle}</h4>
                            <p className={styles.serviceinfo}> {el.text}</p>
                            <Link href={el.src}>
                                <button className={styles.servicebutton}> Learn More </button>
                            </Link>
                            
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default Services;