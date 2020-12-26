import React, { useState } from 'react';
import './Login.css';
import login_background from '../../images/background/2.jpg'
import Header from '../Header/Header';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from '../SignUp/Form';

const Login = () => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <div className="container-fluid login-page">
                <Header></Header>
                <div className="container login-area">
                    <div className="container mt-5">
                        <h2>Welcome to Bsocial</h2>
                        <h5>Connecting people</h5>
                        <div className="container submit-area">
                            <form>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="E-Mail" required></input>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Password" required></input>
                                </div>
                                <br></br>
                                <button className="login-button"> Log into your account</button>
                            </form>
                            <p className="signup-paragraph mt-2">Already have an account?  <Button variant="primary" onClick={handleShow}>Signup</Button></p>
                        </div>
                        <div className="container login-page-lower-area">
                            <button className="semi-transparent-button">About Us</button>
                            <button className="semi-transparent-button">FAQs</button>
                            <button className="semi-transparent-button">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SIgn Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form></Form>
</Modal.Body>
{/*
<Modal.Footer>
<Button variant="secondary" onClick={handleClose}>
    Close
</Button>
<Button variant="primary" onClick={handleClose}>
    Save Changes
</Button>
</Modal.Footer>
*/}
</Modal>
        </div>
    );
};

export default Login;