import { MaterialTableProps } from 'material-table';

export interface BaseRowData {
    id: string
};

export type TableProps<RowData extends BaseRowData> = Omit<MaterialTableProps<RowData>, "components"> & {
    initialSelectedRowId?: string;
};