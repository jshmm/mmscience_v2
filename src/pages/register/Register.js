import React from 'react';
import {
  Typography,
  TextField,
  Button,
  Divider,
  Checkbox,
} from '@material-ui/core';
import Layout from '../../component/Layout';
import './register.css';

function Register() {
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
                Please create first account
              </Typography>
              <div className="input_form">
                <TextField
                  label="Full name"
                  variant="outlined"
                  className="login_input"
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  className="login_input"
                />
                <TextField
                  label="Education"
                  variant="outlined"
                  className="login_input"
                />
                <TextField
                  label="Address"
                  variant="outlined"
                  className="login_input"
                />
                <div className="mt-3 mb-3">
                  <Divider />
                </div>
                <TextField
                  label="Password"
                  variant="outlined"
                  className="login_input"
                  type="password"
                />
                <div className="checkbox_row mt-3 mb-3">
                  <Checkbox
                    value="secondary"
                    color="primary"
                    className="checkbox"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                  <Typography variant="body2">
                    By clicking checkbox, you have read and agreed to our
                    <span className="bold"> Terms and Conditions</span>
                  </Typography>
                </div>
              </div>
              <div className="login_btn">
                <Button variant="contained" color="primary" fullWidth>
                  Register
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

export default Register;
