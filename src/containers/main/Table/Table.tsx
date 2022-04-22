import React from 'react';
import styled from 'styled-components';
import { useTable, Cell } from 'react-table';

import { tableHeaders } from './tableHeaders';
import { TableColumnsProps } from '../../../types/Table/TableColumns';
import { makeData } from './makeData';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

type TableProps = {
  columns: TableColumnsProps[];
  data?: any;
}

const Table = ({ columns, data }: TableProps) => {
  // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    const tableCell = (cell: Cell) => {
      try {
        if (typeof cell.value === 'string' && cell.value.includes('\n')) {
          console.log({ cell: cell.value });
          const lines = cell.value.split('\n')
          return lines.map((line:string, i:number)=><div key={i}>{line}<br/></div>)
        }
        return cell.render('Cell')
      } catch (error) {
        console.log({error });
      }
    }

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell: Cell)  => {
                    return <td {...cell.getCellProps()}>{tableCell(cell) ? tableCell(cell) : 'хй'}</td>
                  }
                  )}
                </tr>
              )
            })}
          </tbody>
    </table>
  )
  
}

function TableComponent() {
  const columns = React.useMemo(
    () => tableHeaders,
    []
  )

  const data = React.useMemo(() => makeData, [])

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default TableComponent;
