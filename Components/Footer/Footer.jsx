import React from 'react';
import styles from './footer.module.css';

const Footer = () => {

    const year = new Date().getFullYear();

    return ( 
    <>
        <footer className={styles.footer}>
            <div className={styles.footercontent}>
                <div className={styles.container1}>
                    <div>
                        <h4>Heading</h4>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                    </div>
                </div>
                <div className={styles.container2}>
                    <div>
                        <h4>Heading</h4>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                    </div>
                </div>
                <div className={styles.container3}>
                    <div>
                        <h4>Heading</h4>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                    </div>
                </div>

                <div className='container2'>
                    <h4>Heading</h4>
                    <div>Reach out to us: </div>
                    <div style={{marginTop:'3vh'}}>
                        B3502, DB Woods, CHS Krishna Vatika Marg, <br/>
                        Goregaon(East), Mumbai, 400063, Maharashtra, INDIA
                    </div>
                    <div style={{marginTop:'4vh'}}>© {year} School Hype</div>
                </div>
            </div>
        </footer>
    </>
     );
}
 
export default Footer;