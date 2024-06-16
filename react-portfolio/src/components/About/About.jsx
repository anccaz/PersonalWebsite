import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img   
                    src={getImageUrl("assets/image.jpeg")} 
                    alt= "Profile Photo" 
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("assets/image.jpeg")} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Developer</h3>
                            <p>
                                I am a developer with frontend and backend 
                                experience in web and mobile development.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};