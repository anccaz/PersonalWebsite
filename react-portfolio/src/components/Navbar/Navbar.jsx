import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <nav className={styles.navbar}> 
            <a className={styles.title} href="/">
              Portfolio
            </a>
            <div className={styles.menu}>
                <img // HTML tag for menu mage
                    className={styles.menuBtn} 
                    src={
                      menuOpen 
                      ? getImageUrl("asset/closeIcon.png") //If closed
                      : getImageUrl("asset/menuIcon.png")  //If open
                    } 
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                  />
                  <ul 
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                  >
                      <li>
                        <a href= "#about">About</a>
                      </li> 
                      <li>
                        <a href= "#experience">Experience</a>
                      </li> 
                      <li>
                        <a href= "#projects">Projects</a>
                      </li> 
                      <li>
                        <a href= "#contact">Contact</a>
                      </li> 
                  </ul> 
              </div>
          </nav> // Semantic HTML tag, li is for list
      );
  }; 
