import React from 'react';

import { Box, Stack, Button, TextField } from '@mui/material';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: false,
      password: false,
    };
  }

  render() {

    const handlePasswordChange = (event) => {
      console.log(event.target.value);
      this.setState({ email: event.target.value });
    }

    const handleEmailChange = (event) => {
      console.log(event.target.value);
      this.setState({ password: event.target.value });
    }

    const handleSubmit = (event) => {
      event.preventDefault();

      console.log(this.state);

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
        </Stack>
      </Box>
    );
  }
}

export default LoginForm;