import styles from './PostDetails.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { formatDistance } from 'date-fns';

export default function PostDetails() {

  const [ post, setPost ] = useState({})

  const { id } = useParams();

  const navigate = useNavigate();

  const today = new Date();

  useEffect(() => {
    fetch(`/posts/${id}`)
    .then(r => {
      if(r.ok) {
        r.json().then((data)=>setPost(data))
      } else {
        alert('Error: not found');
      }
    });
  }, [id])

  return (
    <div className={styles.postBox}>
      <h3>{post.title} - ${post.price} <span className={styles.area}>({post.area})</span></h3>
      <img src={post.image} alt="item" width="400" height="400"/>
      <p>{post.description}</p>
      <p className={styles.indent}>• do NOT contact me with unsolicited services or offers</p>
      <div className={styles.metadata}>
        <span>post id: {post.id}</span>
        <span>posted: {post.created_at
          ? <span className={styles.underlined}>{formatDistance(new Date(post.created_at), today)}
          </span>
          : null} ago
        </span>
        <span>updated: {post.updated_at
          ? <span className={styles.underlined}>{formatDistance(new Date(post.created_at), today)}
          </span>
          : null} ago
        </span>
      </div>
    </div>
  )
}