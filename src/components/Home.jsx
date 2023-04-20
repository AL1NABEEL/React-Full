import React, { useState, useEffect } from 'react';
import axios from "axios";
import Loading from './Loading/Loading';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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
              </div>
              {posts &&
                posts.map((post, i) => (
                  <div className='m-5 bg-gradient-to-br from-blue-500 to-gray-500 p-5 rounded-xl hover:text-white max-w-3xl relative mx-auto capitalize' key={post.id}>
                    <p className="">{post.title}</p>
                   
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