import React from "react";
import styles from "../styles/Homepage.module.css";
import Image from "next/image";
const Homepage = () => {
  return (
    <>
      <div>Your Own</div>
      <div>E-commerce Site</div>
      <div>Hello there! Welcome. Lets create a ecommerce site for you</div>
      <div>Learn More</div>
      <div>
        <Image src="/img/illus-logo.png" width={640} height={340} />
      </div>
    </>
  );
};

export default Homepage;
