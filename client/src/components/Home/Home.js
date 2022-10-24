import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home({ user }) {

  const path = user ? '/account' : '/login';

  return (
    <div className={styles.home}>
      <div className={styles.leftBar}>
        <Link className={styles.siteTitle}>gregslist</Link>
        <br></br>
        <Link className={styles.posting}>create a posting</Link>
        <Link to={path}>my account</Link>  
      </div>
      <div className={styles.main}>Main</div>
      <div className={styles.rightBar}>Right bar</div>
    </div>
  )
}

export function LeftBar() {

  return (
    <>
      <Link className={styles.siteTitle}>gregslist</Link>
      <br></br>
      <Link to='/post' className={styles.posting}>create a posting</Link>
      <Link to='/login'>my account</Link>

    </>
  )
}