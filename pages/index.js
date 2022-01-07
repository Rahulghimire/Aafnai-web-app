import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Homepage from "../components/Homepage";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Aafnai - Your Own E-commerce Site</title>
        <meta name="description" content="Get your own E-commerce site today" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </div>
  );
}
