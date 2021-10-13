import { Button, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const { googleSignIn, gitHubSignIn, error, user, setError } = useAuth();

    const location = useLocation();
    const histroy = useHistory();
    const redirect_uri = (location.state?.from) || '/home';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                histroy.push(redirect_uri);
            })
            .catch(error => setError(error.message))
    }

    return (
        <div className="login-container">
            <h1>Please Login here !</h1>
            <Button onClick={handleGoogleSignIn} variant="contained" color="primary">
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