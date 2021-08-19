import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.foot_first}>
                    <div className={`${styles.sec_title} ${styles.footer_title}`}>
                        The Best <br />
                        Agency for <br/>
                        Your Business
                    </div>
                    <ul>
                        <li>
                            <NavLink
                                to='/'
                                exact
                                activeClassName={styles.active}
                                className={styles.navLink}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                exact
                                activeClassName={styles.active}
                                className={styles.navLink}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/contact'
                                exact
                                activeClassName={styles.active}
                                className={styles.navLink}
                            >
                                Contact
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>
                <ul className={styles.footer_cont}>
                    <li className={styles.first}>
                        <div className={styles.name_part}>Email</div>
                        <div className={styles.cont_part}>
                            <span>email@umaya_agency.com</span><br />
                            <span>email@umaya_job.com</span>
                        </div>
                    </li>
                    <li>
                        <div className={styles.name_part}>Address</div>
                        <div className={styles.cont_part}>
                            <span>PO Box 223158 Oliver Street</span><br />
                            <span>East Victoria 2006 UK</span>
                        </div>
                    </li>
                    <li className={styles.last}>
                        <div className={styles.name_part}>Phone</div>
                        <div className={styles.cont_part}>
                            <span>+23 8 8532 7834</span> <br />
                            <span>+23 8 9635 7335</span>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>

    )
};


