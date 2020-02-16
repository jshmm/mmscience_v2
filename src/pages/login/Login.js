import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import Layout from '../../component/Layout';
import './login.css';

function Login() {
  return (
    <Layout>
      <div style={{ marginTop: '120px' }}>
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <div className="login_form">
              <Typography
                variant="h6"
                gutterBottom
                align="center"
                color="primary">
                MM Science
              </Typography>
              <Typography variant="subtitle2" gutterBottom align="center">
                Welcome back, please login your account
              </Typography>
              <div className="input_form">
                <TextField
                  id="standard-basic"
                  label="Username or Email"
                  variant="outlined"
                  className="login_input"
                />
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="outlined"
                  className="login_input"
                />
              </div>
              <div className="login_btn">
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    </Layout>
  );
}

export default Login;
