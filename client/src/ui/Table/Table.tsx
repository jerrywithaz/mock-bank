import React, { useState } from 'react';
import icons from './icons';
import { TableProps, BaseRowData } from './types';
import MaterialTable from 'material-table';

function Table<RowData extends BaseRowData>({
    initialSelectedRowId, 
    options: passedOptions = {},
    onRowClick: passedOnRowClick = () => {},
    ...rest
}: TableProps<RowData>) {

    const [selectedRowId, setSelectedRowId] = useState<string | null>(initialSelectedRowId || null);

    function onRowClick(
        event?: React.MouseEvent, 
        rowData?: RowData,
        toggleDetailPanel?: (panelIndex?: number) => void
    ) {
        if (rowData) {
            setSelectedRowId(rowData.id);
        }
        passedOnRowClick(event, rowData, toggleDetailPanel);
    }
    const options = {
        ...passedOptions,
        rowStyle: (rowData: RowData) => ({
            backgroundColor: rowData.id === selectedRowId ? '#efefef' : ''
        })
    };

    return (
        <MaterialTable 
            {...rest} 
            icons={icons} 
            options={options}
            onRowClick={onRowClick}/>
    );

}

Table.defaultProps = {

};
export default Table;