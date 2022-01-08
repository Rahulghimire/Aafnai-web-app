import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/img/aafnailogo.png" alt="" width={100} height={100} />
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/home/">
            <a className={styles.listItem}>Home</a>
          </Link>
          <Link href="/shop">
            <a className={styles.listItem}>Shop</a>
          </Link>
          <Link href="/about">
            <a className={styles.listItem}>About Us</a>
          </Link>
          <Link href="/contact">
            <a className={styles.listItem}>Contact Us</a>
          </Link>
          <div className={styles.login}>
            <Link href="/login">
              <a className={styles.button_1}>LogIn / SignUp</a>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
