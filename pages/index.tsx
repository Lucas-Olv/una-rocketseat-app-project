import type { NextPage } from 'next';
import { useRouter } from 'next/router'
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import fundo from '../src/images/fundo.png';
import logo from '../src/images/logo.png';

const Home: NextPage = () => {

  const router = useRouter();

  return (
    <section>
      <Head>
        <title>Rocketseat App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img alt="Background" className={styles.imageWrapper_fundo} src={fundo.src} />
          <img alt="Rocketseat logo" src={logo.src} className={styles.imageWrapper_logo}></img>
          <h1 className={styles.imageWrapper_title}>rocketseat</h1>
        </div>

        <button className={styles.button} onClick={() => router.push('login')}>
          <strong className={styles.button_title}>EMBARCAR NO FOGUETE</strong>
          <i className={`${styles.button_icon} + bi bi-arrow-right`}></i>
        </button>
      </main>
    </section>
  )
}

export default Home;
