import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link'

const Footer = () => {

    const year = new Date().getFullYear();

    return ( 
    <>
        <footer className={styles.footer}>
            <div className={styles.footercontent}>
                <div className={styles.container1}>
                    <div>
                    <h4>Important Links </h4>
                    <Link href={'/registration/schools'}>
                            <p className={styles.button2}>School Registration</p>
                    </Link>

                    <Link href={'/parental-guidance'}>
                            <p>Parental Guidance</p>
                    </Link>

                    <Link href={'/parental-guidance'}>
                            <p>Blog</p>
                    </Link>
                    </div>
                </div>

                <div className='container2'>
                    <h4>Contact Us</h4>
                    <div>Reach out to us: </div>
                    <div style={{marginTop:'3vh'}}>
                        B101-Amrapali    
                        Sector-3, Vaishali <br />
                        Ghaziabad - 201010
                    </div>
                    <div style={{marginTop:'4vh'}}>© {year} School Hype</div>
                </div>
            </div>
        </footer>
    </>
     );
}
 
export default Footer;