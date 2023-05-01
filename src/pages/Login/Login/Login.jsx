import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const from = location?.state?.from?.pathname || '/category/0'
        // console.log(password, email);
        logIn(email, password)
            .then(result => {
                const signIn = result.user;
                // console.log(signIn); 
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    return (
        <div className='pt-5' style={{ backgroundColor: '#F3F3F3', height: '630px', }}>
            <div className='container w-25 p-5 bg-white'>
                <h2 className='fw-semibold mb-4 text-center'>Login your account</h2>
                <hr />
                <Form onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><p className='fw-bold'>Email address</p></Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter your email address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><p className='fw-bold'>Password</p></Form.Label>
                        <Form.Control type="password" name='password' placeholder="Enter your password" />
                    </Form.Group>
                    <Button className='w-100' variant="secondary" type="submit">
                        Login
                    </Button>
                    <p className='text-center my-3'>Dont’t Have An Account ? <Link className='text-danger' style={{ textDecoration: 'none' }} to='/register'>Register</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default Login;