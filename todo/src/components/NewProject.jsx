import { useEffect, useState } from "react";
import axios from "axios";


export function NewProject(){
    const [posts, setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>
        setPosts(response.data)) 
        // console.log(response));
        // response.data

    },[]);



    return(
        <>
        {posts.map((post)=>{
           const {id,name,email,body}=post 
           return <div key={id}>
               <h2>{name}</h2>
               <p>{email}</p>
               <p>{body}</p>
           </div>
        })}
        </>
    )
}