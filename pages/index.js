import Head from "next/head";
import Homepage from "../components/Homepage";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Aafnai - Your Own E-commerce Site</title>
        <meta name="description" content="Get your own E-commerce site today" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Homepage />
    </div>
  );
}
