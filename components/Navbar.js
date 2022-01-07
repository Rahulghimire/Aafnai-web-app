import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/img/aafnailogo.png" alt="" width={100} height={100} />
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Shop</li>
          <li className={styles.listItem}>About Us</li>
          <li className={styles.listItem}>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
