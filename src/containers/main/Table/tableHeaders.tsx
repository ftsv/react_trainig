import { TableColumnsProps } from '../../../types/Table/TableColumns';
import { Row } from 'react-table';

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
        // Cell: (row: any) => {
        //     const { value } = row.cell;
        //     if (typeof value == 'string') {
        //         const lines = value.split('\n')
        //         return lines.map((line, i)=><div key={i}>{line}</div>);
        //     }
        //     return value;
        // },
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