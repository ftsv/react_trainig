import React from 'react';
import TableComponent from './Table/Table';

export const TablePage: React.FC = (): JSX.Element => {
    return (
        <>
            <span>{`страница react-table`}</span>
            <TableComponent />
        </>
    )
}