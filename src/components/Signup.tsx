import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const Signup = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleInput = (e : any ) =>{

            const {name, value} = e.target;
            setUser((prev) =>{
                return{
                    ...prev,
                    [name]:value,
                };
            });
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(user);
        const{username,email,password,confirmPassword} = user;
        if(
            username === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === "" 
        ){
                alert("All the feild are mandatory");
         }
         if(password === confirmPassword){
            axios.post("http://localhost:5000/api/v1/users/Signup",user)
            .then((res) => alert(res.data.message))
           .catch((error)=> console.log(error));         
        }else{
            alert("Password and confrim Password not same");
            }    
    }
    return <Container>
        <h2 className="display-4 text-center">Signup</h2>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter the User Name" 
                name='username' value={user.username} onChange={handleInput}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter the Email "
                 name='email' value={user.email} onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="email" placeholder="Enter the Password" 
                name='password' value={user.password} onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="email" placeholder="Enter the Password Again" 
                name='confirmPassword' value={user.confirmPassword} onChange={handleInput} />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit} >Register</Button>{' '}
            <Button variant="secondary">Cancle</Button>{' '}
        </Form>
        
        </Container>
}
export default Signup;