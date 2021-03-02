import styles from '../styles/components/Input.module.css';

export default function Input() {
  return (
    <div className={styles.inputContainer}>
      <input id="text" type="text" />
      <input id="submit" type="submit" value="Start" />
    </div>
  )
}