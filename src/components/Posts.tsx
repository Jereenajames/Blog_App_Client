import axios from "axios";
import { useEffect,useState } from "react";


const Posts = () =>{
    useEffect(() =>{
        axios
        .get("http://localhost:5000/api/v1/posts")
        .then((res) => setPosts(res.data.data))
        .catch((error) =>alert(error.response.data.message))
    })
    return(

        <div>Posts</div>
    )
}
export default Posts;