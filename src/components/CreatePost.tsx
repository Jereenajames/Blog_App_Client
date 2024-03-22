import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FileBase64 from "react-file-base64";
import { useState } from "react";
import axios from "axios";

const CreatePost = () =>{
    const [post, setPost] = useState({
        tittle: "",
        description:"",
        image:"",
        tags:" "
    })

    const handleInput = (e: any) =>{
        const {name, value} = e.target;
        setPost((prev) =>{
            return{
                ...prev,
                [name] : value,
            }
        })
    }

    const handleSubmit = async(e: any) =>{
        e.preventDefault();
        console.log(post);
        const token =JSON.stringify(localStorage?.getItem("token"));
        const jwt = JSON.parse(atob(token?.split(".")[1]))
       const userId = (jwt.id);
       await  axios.post(`http://localhost:5000/api/v1/posts/${userId}`,post, {
            headers:{
                "x-access-token" : token,
            },
         })
         .then((res) =>alert(res.data.message))
         .catch((error)=>console.log(error.response.data.message));              
    };
    return <Container>
        <h2 className = "display-3 text-center">Create Post</h2>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Tittle</Form.Label>
        <Form.Control type="text" placeholder="Enter the Tittle"
          name="tittle" value={post.tittle}
          onChange={handleInput}/>

      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Description </Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter the Description"
         name="description" value={post.description} onChange={handleInput}/>
      </Form.Group>    

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Image</Form.Label>
       <div className="form-control">       
        <FileBase64 type="file"  onDone={({base64} : any ) =>{
                        setPost((prev)=>{
                            return{
                                ...prev,
                                image: base64,
                            }
                        })
        }}/>
        </div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Tags (seprated by comma) </Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter the Tags" 
        name="tags" value={post.tags}        
        onChange={handleInput

        }
        />
      </Form.Group>

      <Button variant="primary" onClick={handleSubmit} >Create Post</Button>{" "}
      <Button variant="secondary">Cancle</Button>{" "}
    </Form>

    </Container>
      
}
export default CreatePost;