import React from 'react';
import { Redirect } from 'react-router-dom';


import { Box, Stack, Button, TextField } from '@mui/material';

/**
 * Login form
 * @returns {JSX.Element}
 * @constructor
 * @component
 * return (
 * <LoginForm />
 * )
 */
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: false,
      password: false,
      redirect: false,
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/dashboard' />
    }
  }

  render() {

    const handlePasswordChange = (event) => {
      this.setState({ email: event.target.value });
    }

    const handleEmailChange = (event) => {
      this.setState({ password: event.target.value });
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      if (this.state.email && this.state.password) {
        this.setState({
          redirect: true
        })
      }
    }

    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { marign: 0, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >

        <Stack spacing={2} direction="row">
          <TextField label="Username" variant="outlined" onChange={handlePasswordChange} />
          <TextField id="password-outlined-basic" label="Password" variant="outlined" onChange={handleEmailChange} />
          <Button disabled={!(this.state.email && this.state.password)} type="submit" onClick={handleSubmit} variant="outlined" sx={{
            width: '25ch',
            height: '56px',
            margin: '0px',
            padding: '0px',
          }}>Login</Button>
          {this.renderRedirect()}
        </Stack>
      </Box>
    );
  }
}

export default LoginForm;