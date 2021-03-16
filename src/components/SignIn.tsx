import styles from '../styles/components/SignIn.module.css';

export default function SignIn() {
  return (
    <div className={styles.inputContainer} onSubmit={(e) => e.preventDefault()}>
      <form >
        <input
          type="text"
          placeholder="Digite seu username"
          spellCheck="false"
          required
        />
        <input type="submit" />
      </form>
    </div>
  )
}