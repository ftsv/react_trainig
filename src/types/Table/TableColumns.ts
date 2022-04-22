type ColumnProps = {
    Header: string;
    accessor?: string;
    Cell?: any;
}

export type TableColumnsProps = {
    Header: string;
    columns: ColumnProps[];
}
