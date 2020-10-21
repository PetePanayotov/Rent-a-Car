import React, { useEffect, useState } from 'react';
import Post from './components/posts';
import Pagination from './components/pagination';
import './App.css';
import { getRoles } from '@testing-library/react';

const App = () => {

  const [posts , setPosts] = useState([]);
  const [loading , setLoading] = useState(false);
  const [currentPage , setCurrentPage] = useState(1);
  const [postsPerPage , setPostsPerPage] = useState(10); 


  useEffect(() => {

    const getPosts = async () => {
      setLoading(true);
      const url = 'https://jsonplaceholder.typicode.com/posts'
      const promise = await fetch(url);

      const response = await promise.json();
      setPosts(response);
      setLoading(false);
      
    };

    getPosts();

  }, []);

  // Get Curren Posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost , indexOfLastPost);

  // Change Page

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container">
        <h1>My Blog</h1>
        <Post posts={currentPost} loading={loading}/>
        <Pagination paginate={paginate} postsPerPage={postsPerPage} totalPost={posts.length}/>
    </div>
  )

};

export default App;
