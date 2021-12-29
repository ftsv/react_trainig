type ColumnProps = {
    Header: string;
    accessor?: string;
}

export type TableColumnsProps = {
    Header: string;
    columns: ColumnProps[];
}
