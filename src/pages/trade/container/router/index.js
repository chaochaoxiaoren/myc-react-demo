import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Index from '@trade/views/Index';
import VList from '@trade/views/VList';
import Intro from '@trade/views/Intro';
import Mock from '@trade/views/Mock';
import Lottie from '@trade/views/Lottie';
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
  {
    path: '/trade/lottie',
    element: <Lottie />,
  },
]);

export default router;
