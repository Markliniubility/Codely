import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Result from '../components/Result';

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Result />
    <Footer />
  </>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
