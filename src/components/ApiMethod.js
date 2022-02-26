import React, { useEffect, useState } from 'react';
import ApiData from './ApiData';

const ApiMethod = () => {
    const [userData ,setuserData] = useState([]);
    const [loading , setloading] = useState(true);
    const getUsers = async () => {
        try{
            setloading(false);
            const res = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
            setuserData(await res.json());
        }catch(error){
            console.log("my error is "+ error);
        }
    }
    useEffect(()=>{
        getUsers();
    });
    if(loading){
        return(
            <>
                <h1 className='loading'>Loading.....</h1>
            </>
        )
    }
  return (
    <>
        <ApiData userData={userData}/>
    </>
  )
}

export default ApiMethod