import { Container } from '@mui/material';

const Layout = ({ children, attributes }) => {
  return (
    <Container maxWidth={false}>
      {children}
    </Container>
  );
}

export default Layout;