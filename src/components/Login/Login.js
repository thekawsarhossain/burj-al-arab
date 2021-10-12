import { Button, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const { googleSignIn, gitHubSignIn, error, user } = useAuth();
    return (
        <div className="login-container">
            <h1>Please Login here !</h1>
            <Button onClick={googleSignIn} variant="contained" color="primary">
                Google Signin
            </Button>
            <Button onClick={gitHubSignIn} variant="contained" color="secondary">
                GitHub Signin
            </Button>
            <Typography color="red">{error}</Typography>
        </div>

    );
};

export default Login;