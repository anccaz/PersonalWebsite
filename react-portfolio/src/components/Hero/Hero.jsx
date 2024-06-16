import React from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hello World, I'm Annie!</h1>
                <p className={styles.description}>
                    I'm a student majoring in computer science at 
                    UT Dallas passionate about software engineering.
                </p>
                <a href= "liannie6241@gmail.com" className={styles.contactBtn}>
                Contact Me
                </a>
            </div>
            <img 
                src={getImageUrl(assets/image.jpeg)} 
                alt ="Hero image of me" 
                classname={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};