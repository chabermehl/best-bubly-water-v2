import React from 'react';

import Navbar from '../Navbar/Navbar';
import Footer from '../../atoms/Footer/Footer';

import StyledLayout from './style';

const Layout = ({children}) => {
  return (
    <StyledLayout>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
