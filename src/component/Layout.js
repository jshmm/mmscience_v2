import React from 'react';
import Container from '@material-ui/core/Container';
import AppDrawer from './Navbar';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <AppDrawer />
      <Container maxWidth="md">{children}</Container>
    </>
  );
}
