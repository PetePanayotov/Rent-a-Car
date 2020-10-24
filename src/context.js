// import React, { useEffect, useState } from 'react';
// import Post from './components/posts';
// import Pagination from './components/pagination';
// import './App.css';
// import { getRoles } from '@testing-library/react';

// const App = () => {

//   const [posts , setPosts] = useState([]);
//   const [loading , setLoading] = useState(false);
//   const [currentPage , setCurrentPage] = useState(1);
//   const [postsPerPage , setPostsPerPage] = useState(10); 


//   useEffect(() => {

//     const getPosts = async () => {
//       setLoading(true);
//       const url = 'https://jsonplaceholder.typicode.com/posts'
//       const promise = await fetch(url);

//       const response = await promise.json();
//       setPosts(response);
//       setLoading(false);
      
//     };

//     getPosts();

//   }, []);

//   // Get Curren Posts

//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPost = posts.slice(indexOfFirstPost , indexOfLastPost);

//   // Change Page

//   const paginate = (pageNumber) => setCurrentPage(pageNumber)

//   return (
//     <div className="container">
//         <h1>My Blog</h1>
//         <Post posts={currentPost} loading={loading}/>
//         <Pagination paginate={paginate} postsPerPage={postsPerPage} totalPost={posts.length}/>
//     </div>
//   )

// };

// export default App;

// import React from 'react';
// import {useSelector} from 'react-redux';
// import {useDispatch} from 'react-redux';
// import actions from './actions/auth';


// const {login , logout} = actions;

import React , {useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import actions from './actions/auth';

const {login , logout} = actions;

const getCookie = (name) => {

    const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;

};

const GlobalContext = (props) => {

    const dispatch = useDispatch();

    const authObj = useSelector(state => state.auth);
    const {isLoggedIn , user} = authObj;

    useEffect(() => {
        
        verifyUser()

    } , []);

    async function verifyUser() {

        const cookieValue = getCookie('oreo');
    
        if (!cookieValue) {
            
            return dispatch(logout())
        };

        const url = 'http://localhost:9999/api/user/verify';
    
        const data = {token: cookieValue};

        const headersObj = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };


        const promise = await fetch(url , headersObj);

        if (promise.status === 200) {
        
            const user = await promise.json();
            return dispatch(login(user))
        };

        return dispatch(logout())
    }


    if (isLoggedIn === null) {
        return(
            <p>Loading...</p>
        )
    }

    return (
        <div>
            {props.children}
        </div>
    )

};

export default GlobalContext;
