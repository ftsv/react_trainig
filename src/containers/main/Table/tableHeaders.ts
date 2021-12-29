import { TableColumnsProps } from '../../../types/Table/TableColumns';

export const tableHeaders: TableColumnsProps[] = [
    {
    Header: 'Name',
    columns: [
        {
        Header: 'First Name',
        accessor: 'firstName',
        },
        {
        Header: 'Last Name',
        accessor: 'lastName',
        },
    ],
    },
    {
    Header: 'Info',
    columns: [
        {
        Header: 'Age',
        accessor: 'age',
        },
        {
        Header: 'Visits',
        accessor: 'visits',
        },
        {
        Header: 'Status',
        accessor: 'status',
        },
        {
        Header: 'Profile Progress',
        accessor: 'progress',
        },
    ],
    },
]