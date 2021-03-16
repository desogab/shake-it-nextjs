import styles from '../styles/pages/SignIn.module.css';
import Image from 'next/image';
import SignIn from '../components/SignIn';

export default function Login() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            layout="responsive"
            width={3240}
            height={3240}
          />
        </div>
        <div>
          <Image
            src="/logo-name.png"
            layout="responsive"
            width={1500}
            height={450}
          />
          <p>
            Bem-Vindo(a)!
          </p>
          <SignIn />
        </div>
      </section>
    </div>
  )
}