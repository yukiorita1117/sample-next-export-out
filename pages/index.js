import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sample Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sample Next App</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Image
              width="100%"
              height="100%"
              src={"/images/hoge.png"}
              loading="lazy"
              alt="logo"
            />
          </div>
          <div className={styles.card}>
            <Image
              width="100%"
              height="100%"
              src={"/images/hoge.png"}
              loading="lazy"
              alt="logo"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
