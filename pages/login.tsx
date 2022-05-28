import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Input } from '../src/components/Input';
import { Button } from '../src/components/Button';
import styles from '../styles/Login.module.scss'

const Login: NextPage = () => {

  const router = useRouter();

  return (
    <section className={styles.wrapper}>
      <Head>
        <title>Rocketseat App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <i className={`${styles.header_icon} + bi bi-arrow-left`} onClick={() => router.back()}></i>
        <strong className={styles.header_title}>Faça login na plataforma</strong>
      </header>

      <main className={styles.main}>
        <form className={styles.form} action="">
          <h2 className={styles.form_title}>Login</h2>
          <Input type="email" icon='bi bi-envelope-fill' placeholder='Digite seu e-mail' required />
          <Input type="password" icon="bi bi-lock-fill" placeholder='Digite sua senha' required />
          <strong className={styles.form_forgotPassword} onClick={() => router.push("forgotPassword")}>Esqueci minha senha</strong>
          <Button>ENTRAR</Button>
          <p className={styles.form_register}>Nao tem conta? <a href="/createAccount">Registre-se</a></p>
          <div className={styles.form_github}>
            <p className={styles.form_github_option}>Ou entre com</p>
            <div className={styles.form_github_button}>
              <i className={`bi bi-github`}></i>
              <strong>GITHUB</strong>
            </div>
          </div>
        </form>
      </main>
    </section>
  )
}

export default Login;