import React, { useEffect, useState } from 'react'
import axios from 'axios'

const user_API= "https://jsonplaceholder.typicode.com/users"
const post_API= "https://jsonplaceholder.typicode.com/posts/"
const cmnt_API= "https://jsonplaceholder.typicode.com/comments"


const AxiosTutorial = () => {
  
  const [userData, setUserData] = useState([]);


  // useEffect(() => {
  //   axios.get(post_API)
  //     .then(response => {
  //       setUserData(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

    useEffect(() => {
    axios.get(cmnt_API)
      .then(response => {
        setUserData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // const filtered= userData.filter((data)=> data.userId ===8 );

  const filtered_email= userData.filter((data)=> data.postId ===8 );
  const count_filtered_email= filtered_email.length;
  return (
    <div>
      {/* {userData.map(data => (
        <div key={data.id}>
          <h6>{data.userId}</h6>
          <p>{data.title}</p>
          <p>{data.body}</p>
        </div>
      ))} */}
{/* 
      {filtered.map(data=>(
        <div key={data.id}>
          <h6>{data.userId}</h6>
          <p>{data.title}</p>
          <p>{data.body}</p>
        </div>
      ))} */}


    
    <h1>total count={count_filtered_email}</h1>
    </div>
  );
}

export default AxiosTutorial;