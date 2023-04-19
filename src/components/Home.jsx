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
    <main className=''>
      {error ? (
        <>{error}</>
      ) : (
        <div className=''>
          {loading ? (
            <Loading />
          ) : (
            <div className=' '>
              <div className=''>
                <h1 className='text-center text-xl font-bold mt-2'>Posts Submitted By Users</h1>
                {/* <h1 className='text-center text-blue-400 '>Add Post</h1> */}
                {/* <form onSubmit={handleSubmit}>
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
                </form> */}
                
              </div>
              {posts &&
                posts.map((post, i) => (
                  <div className='m-5 bg-gradient-to-br from-blue-500 to-gray-500 p-5 rounded-xl hover:text-white max-w-3xl relative mx-auto capitalize' key={post.id}>
                    <p className="">{post.title}</p>
                    {/* <button onClick={() => deletePost(post.id)}>delete</button> */}
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
      </main>
    </>
    )
}

export default Home;