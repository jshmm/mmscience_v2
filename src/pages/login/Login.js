import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, TextField, Button } from '@material-ui/core';
import { userActions } from '../../actions/users';
import Layout from '../../component/Layout';
import './login.css';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onFormSubmit = () => {
    const { email, password } = values;
    const payload = {
      email,
      password,
    };
    dispatch(userActions.login(payload));
  };

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
                  name="email"
                  label="Username or Email"
                  variant="outlined"
                  className="login_input"
                  onChange={onInputChange}
                  value={values.email}
                />
                <TextField
                  name="password"
                  label="Password"
                  variant="outlined"
                  className="login_input"
                  type="password"
                  onChange={onInputChange}
                  value={values.password}
                />
              </div>
              <div className="login_btn">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={onFormSubmit}>
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
