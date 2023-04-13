import React, { useState, useEffect } from 'react';
import axios from "axios";
import Loading from './Loading/Loading';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const fetchData = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20')
        .then((response)=>{
            if (response && response.status === 200) {
                setPosts(response.data);
                setLoading(false);
                setError(false);
              } else {
                setError('Error Found');
              }
        }).catch((err)=>{
            setError('page not found')
        })
    }
    useEffect(()=>{
        fetchData();
    },[])

    const deletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        fetchData();
    };
    
    const handleTitle = (event) => {
        setTitle(event.target.value);
      };
    
      const handleBody = (e) => {
        setBody(e.target.value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post('https://jsonplaceholder.typicode.com/posts', {
            title,
            body,
          })
          .then((response) => {
            fetchData();
    });
    };

    return(
    <>
    <h1>Home Page</h1>
    <div>users</div>
      {error ? (
        <>{error}</>
      ) : (
        <div>
          {loading ? (
            <Loading />
          ) : (
            <div>
              <div>
                <h1>Add Post</h1>
                <form onSubmit={handleSubmit}>
                  <input
                    type='text'
                    value={title}
                    name='title'
                    onChange={handleTitle}
                    placeholder='Name'
                  />
                  <input
                    type='text'
                    value={body}
                    onChange={handleBody}
                    name='body'
                    placeholder='Body'
                  />
                  <button type='submit'>Submit</button>
                </form>
              </div>
              {posts &&
                posts.map((post, i) => (
                  <div key={post.id}>
                    <p>{post.title}</p>
                    <button onClick={() => deletePost(post.id)}>delete</button>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </>
    )
}

export default Home;