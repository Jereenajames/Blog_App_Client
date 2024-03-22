import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const Signin = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        
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

    const handleSubmit = async (e : any) => {
        e.preventDefault()
        console.log(user);   
        const{email,password} = user;
        if(email === "" || password === ""  ){

                alert("All the feild are mandatory");
            }     
            
            else{
                axios.post(" http://localhost:5000/api/v1/users/signin",user)
                .then((res) => {alert(res.data.message);
                localStorage.setItem("token",res.data.token)})
                .catch((error)=> console.log(error.response.data.message))
            }
            }
        
        return <Container>
        <h2 className="display-4 text-center">SignIn</h2>
        <Form>
            
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
            

            <Button variant="primary" onClick={handleSubmit} >Sign In</Button>{' '}
            <Button variant="secondary">Cancle</Button>{' '}
        </Form>
        
        </Container>
}
export default Signin;