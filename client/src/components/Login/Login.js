import styles from './Login.module.css';

export default function Login() {

  return (
    <div className={styles.loginBox}>
      <form className={styles.login}>
        <h1 className={styles.loginTitle}>Log in</h1>
        <div className={styles.field}>
          <label>Email / Handle</label>
          <input type='email'></input>
        </div>
        <div className={styles.field}>
          <label>Password</label>
          <input type='text'></input>
        </div>
        <button type='submit' className={styles.loginBtn}>Log in</button>
      </form>
      <p>or</p>
      <div className={styles.createAccount}>create an account</div>
    </div>
  )
}