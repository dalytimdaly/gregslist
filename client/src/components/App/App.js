import styles from './App.module.css';
import Home from '../Home/Home.js';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import MyAccount from '../MyAccount/MyAccount';
import CreatePost from '../CreatePost/CreatePost';
import Header from '../Header/Header';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PostDetails from '../Post/PostDetails';
import PostIndex from '../Post/PostIndex';

function App() {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    fetch(`/me`)
    .then(r => {
      if(r.ok) {
        r.json().then(userData => setUser(userData));
      }
    })
  }, [])

  function newUser(userData) {
    setUser(userData);
  }
  
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Home user={user}/>} />
        
        <Route element={<Header />}>
          <Route path='/login' element={<Login user={user} newUser={newUser}/>} />
          <Route path='/account' element={<MyAccount user={user} newUser={newUser} />} />
          <Route path='/createpost' element={<CreatePost user={user} />} />
          <Route path='/posts/' element={<PostIndex user={user} />} />
          <Route path='/posts/:id' element={<PostDetails user={user} />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
