import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import MainLayout from '../containers/main/MainLayout';
import AccountLayout from '../containers/account/AccountLayout';

import { PageNotFoundView } from '../error/PageNotFoundView';
import AccountDetailView from '../containers/account/AccountDetailView';
import { MainView } from '../containers/main/MainView';
import { TablePage } from '../containers/main/TablePage';

export const AppRoutes: React.FC = (): JSX.Element => {
    const mainRoutes = {
        path: '/',
        element: <MainLayout />,
        children: [
            {path: '*', element: <Navigate to='/404' />},
            {path: '/', element: <MainView />},
            {path: '404', element: <PageNotFoundView />},
            {path: 'react-table', element: <TablePage />},
            {path: 'account', element: <Navigate to='/account/list' />},
            ],
    };

    const accountRoutes = {
        path: 'account',
        element: <AccountLayout />,
        children: [
            {path: '*', element: <Navigate to='/404' />},
            {path: ':id', element: <AccountDetailView />},
            // {path: 'add', element: <AccountAddView />},
            // {path: 'list', element: <AccountListView />},
            ],
    };

    const routing = useRoutes([mainRoutes, accountRoutes]);

    return <>{routing}</>
}