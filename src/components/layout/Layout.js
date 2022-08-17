import { Container, Grid } from '@mui/material';

import CSS from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid item xs={2} className={CSS["side-bar"]}>
          Items
        </Grid>
        <Grid item xs={10}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Layout;