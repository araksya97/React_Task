import React from 'react';
import styles from './ContactStyle.module.css'
import Footer from '../../footer/Footer';

export default function Contact() {
    return (
        <>
        <section className={styles.contact_us}>
            <div className={styles.for_bg}>
                <div className={styles.contact_head}>
                    <div className={styles.head_bold_transparent}>
                        Get in touch
                        <span>Contact</span>
                    </div>
                </div>
            </div>

            <div className={`${styles.text} ${styles.container}`}>
                Please fill out the form on this section to contact with me. Or call
                between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </div>
            <div className={`${styles.contact} ${styles.container}`}>
                <div className={styles.left}>
                    <form action="">
                        <input type="text" placeholder="Name" />
                        <input type="mail" placeholder="Email" />
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Message"
                        ></textarea>
                        <div className={styles.button}>
                            <a href="###"> Send Message </a>
                        </div>
                    </form>
                </div>
                <div className={styles.right_map}>
                    <div className={styles.map}>
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48705.486605497725!2d44.59064071878265!3d40.27368622163454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa1cd9b2d58a3%3A0x49ee12aa9db6eafe!2sSaint%20Hovhannes%20Church!5e0!3m2!1sen!2s!4v1618513163880!5m2!1sen!2s"
                            width="600"
                            height="420"
                            //   style="border: 0"
                            allowfullscreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
        
    )
};


