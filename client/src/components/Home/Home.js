import styles from './Home.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Home({ user }) {
  
  const [ searchTerm, setSearchTerm ] = useState('');
  
  const navigate = useNavigate();

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
  }

  // Render MyAccount or Login based on whether user is logged in
  const path = user ? '/account' : '/login';

  return (
    <div className={styles.home}>
      {/* ================LEFT BAR============ */}
      <div className={styles.leftBar}>
        <Link className={styles.siteTitle}>gregslist</Link>
        <br></br>
        <Link to='/posts-create' className={styles.posting}>create a posting</Link>
        <Link to={path}>my account</Link> 
        <br></br>
        <form onSubmit={handleSearch}><input className={styles.search} type='text' placeholder='search gregslist' value={searchTerm} onChange={handleChange}></input></form>
      </div>
      {/* ==========MAIN / CENTER============= */}
      <div className={styles.main}>
        <div className={styles.header}>
          <Link>denver, CO</Link>
        </div>
        <div className={styles.mainContentBox}>
          <div className={styles.col1}>
            <div className={`${styles.section} ${styles.community}`}>
              <Link to='/search/community'>community</Link>
            </div>
            <div className={`${styles.section} ${styles.services}`}>
              <Link to='/search/services'>services</Link>
            </div>
          </div>
          <div className={styles.col2}>
            <div className={`${styles.section} ${styles.housing}`}>
              <Link to='/search/housing'>housing</Link>
            </div>
            <div className={`${styles.section} ${styles.forSale}`}>
              <Link to='/search/for sale'>for sale</Link>
            </div>
          </div>
          <div className={styles.col3}>
            <div className={`${styles.section} ${styles.jobs}`}>
              <Link to='/search/jobs'>jobs</Link>
            </div>
          </div>
        </div>
      </div>
      {/* ============RIGHT BAR================ */}
      <div className={styles.rightBar}>Right bar</div>
    </div>
  )
}
