import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Index from '@trade/views/Index';
import VList from '@trade/views/VList';
import Intro from '@trade/views/Intro';
import Mock from '@trade/views/Mock';
import ErrorPage from '@trade/components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/trade',
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/trade/vlist',
    element: <VList />,
  },
  {
    path: '/trade/intro',
    element: <Intro />,
  },
  {
    path: '/trade/mock',
    element: <Mock />,
  },
]);

export default router;
