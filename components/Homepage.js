import React from "react";
import styles from "../styles/Homepage.module.css";
import Image from "next/image";
const Homepage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content_one}>Your Own</div>
      <div className={styles.content_two}>E-commerce Site</div>
      <div className={styles.content_three}>
        Hello there! Welcome. Lets create an e-commerce site for you.
      </div>
      <div className={styles.four}>
        <button className={styles.button}>Learn More</button>
      </div>
      <div className={styles.right}>
        <Image src="/img/illus-logo.png" width={400} height={300} />
      </div>
    </div>
  );
};

export default Homepage;
