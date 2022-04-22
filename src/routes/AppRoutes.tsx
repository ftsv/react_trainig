import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import MainLayout from '../containers/main/MainLayout';
import AccountPage from '../pages/AccountPage';
import AccountLayout from '../containers/account/AccountLayout';

import { PageNotFoundView } from '../error/PageNotFoundView';
import AccountDetailView from '../containers/account/AccountDetailView';
import { TablePage } from '../containers/main/TablePage';
import { ROUTING } from '../constants';
import SettingsPage from '../pages/SettingsPage';

export const AppRoutes: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: '/', element: <AccountPage /> },
      { path: `/${ROUTING.SETTINGS}`, element: <SettingsPage /> },
      { path: '404', element: <PageNotFoundView /> },
      { path: 'react-table', element: <TablePage /> },
      { path: 'account', element: <Navigate to="/account/list" /> },
    ],
  };

  const accountRoutes = {
    path: 'account',
    element: <AccountLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: ':id', element: <AccountDetailView /> },
      // {path: 'add', element: <AccountAddView />},
      // {path: 'list', element: <AccountListView />},
    ],
  };

  const routing = useRoutes([mainRoutes, accountRoutes]);

  return <>{routing}</>;
};
