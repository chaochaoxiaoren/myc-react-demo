import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Index = () => {

  return (
    <>
      <Link to="/home/market">market</Link> <br />
      <Link to="/home/doc">Doc</Link> <br />
      <Link to="/home/demo">Demo</Link> <br />
      <Link to="/home/less">Less</Link> <br />
      <Link to="/home/sass">Sass</Link> <br />
      <Link to="/home/web3">Web3</Link> <br />
      ========================================
      <Outlet />
    </>
  );
};

export default Index;
