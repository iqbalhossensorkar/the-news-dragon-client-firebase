import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');

    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photo, password, email);

        if (!/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
            setError("Must contain at least one Special Symbol.");
            return;
        }
        if (!/^.{8,16}$/.test(password)) {
            setError("Must be 8-16 Characters Long.");
            return;
        }
        if (!/^(?=.*[0-9]).*$/.test(password)) {
            setError("Must contain at least one Digit.");
            return;
        }
        if (!/^\S*$/.test(password)) {
            setError("Must not contain Whitespaces.");
            return;
        }
        if (!/^(?=.*[A-Z]).*$/.test(password)) {
            setError("Must conatins one Uppercase Character.");
            return;
        }
        if (!/^(?=.*[a-z]).*$/.test(password)) {
            setError("Must conatins one Lowercase Character.");
            return;
        }

        createUser(email, password)
            .then(result => {
                const creatUser = result.user;
                console.log(creatUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    const handleAcceptTerms = event => {
        setAccepted(event.target.checked);
    }

    return (
        <div className='pt-5' style={{ backgroundColor: '#F3F3F3', height: '630px', }}>
            <div className='container w-25 p-5 bg-white'>
                <h2 className='fw-semibold mb-4 text-center'>Register your account</h2>
                <hr />
                <Form onSubmit={handleCreateUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><p className='fw-bold'>Your Name</p></Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter your name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><p className='fw-bold'>Photo URL</p></Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><p className='fw-bold'>Email</p></Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter your email address" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><p className='fw-bold'>Password</p></Form.Label>
                        <Form.Control type="password" name='password' placeholder="Enter your password" required/>
                        {
                            error && <p><small className='text-danger'>{error}</small></p>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handleAcceptTerms} type="checkbox" name='check' label={<>Accept <Link to='/privacy-policy'>Term & Conditions</Link></>} />
                    </Form.Group>
                    <Button className='w-100' variant="secondary" type="submit" disabled={!accepted}>
                        Register
                    </Button>
                    <p className='text-center my-3'>Already Have An Account ? <Link className='text-danger' style={{ textDecoration: 'none' }} to='/login'>Login</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default Registration;