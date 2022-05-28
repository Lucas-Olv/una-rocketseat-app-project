import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Input } from '../src/components/Input';
import { Button } from '../src/components/Button';
import styles from '../styles/ForgotPassword.module.scss';

const ForgotPassword: NextPage = () => {

  const router = useRouter();

  return (
    <section className={styles.wrapper}>
      <Head>
        <title>Rocketseat App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <i className={`${styles.header_icon} + bi bi-arrow-left`} ></i>
      </header>

      <main className={styles.main}>
        <form className={styles.form} action="">
          <h2 className={styles.form_title}>Recuperar senha</h2>
          <Input icon="bi bi-envelope-fill" placeholder="Digite seu e-mail" required/>
          <Button >RECUPERAR</Button>
          <p className={styles.form_return}>Voltar</p>
        </form>
      </main>

    </section>
  )
}

export default ForgotPassword;