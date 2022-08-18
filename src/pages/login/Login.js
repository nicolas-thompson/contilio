import React from 'react';
import { Container, Stack, Typography } from "@mui/material";
import LoginForm from "../../components/login-form/LoginForm";

import CSS from "./Login.module.css";

/**
 * Login page
 * @returns {JSX.Element}
 * @constructor
 * @component
 * return (
 * <Login />
 * )
 */
class Login extends React.Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Typography className={CSS.title} variant="h1" gutterBottom>
          Contilio
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center" className={CSS["vertical-height"]}>
          <LoginForm />
        </Stack>
      </Container>
    );
  }
}
export default Login;
