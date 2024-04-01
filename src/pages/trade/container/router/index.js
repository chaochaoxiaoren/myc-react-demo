import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Index from '@trade/views/Index';
import VList from '@trade/views/VList';
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
]);

export default router;
