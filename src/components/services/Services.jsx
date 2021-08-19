import React from 'react';
import styles from './Services.module.css'
import InfiniteSlider from '../InfiniteSlider/InfiniteSlider';

export default function Services() {
    return (
        <section className={styles.about_us}>
            <div className={`${styles.first} ${styles.container}`}>
                <div className={`${styles.head_part} ${styles.sec_title}`}>
                    About Us
                </div>
                <div className={styles.cont_part}>
                    <div className={styles.text}>
                        Pitchfork vaporware hella, vice next level art party subway tile
                        swag portland. Cliche authentic photo booth, seitan sartorial iPhone
                        brooklyn bicycle rights whatever small batch selvage affogato yuccie
                        adaptogen vinyl. Sartorial franzen tacos cardigan, offal gluten-free
                        pour-over snackwave plaid four dollar toast. Messenger bag keffiyeh
                        church-key, synth iPhone pabst leggings ethical. PBRB cred hot
                        chicken pork belly.
                    </div>
                    <ul className={styles.professions}>
                        <li>Grapic Design</li>
                        <li>User Interface Design</li>
                        <li>User Experience Design</li>
                        <li>Web Design</li>
                        <li>Motion Design</li>
                        <li>Front-end Development</li>
                        <li>Back-end Development</li>
                    </ul>
                </div>
            </div>
            <InfiniteSlider />
        </section>

    )
};


