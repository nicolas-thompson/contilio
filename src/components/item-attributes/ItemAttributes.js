import React from "react";
import { DataGrid } from '@mui/x-data-grid';

class ItemAttributes extends React.Component {

  render() {
    const { attributes } = this.props;
    const columns = [
      { field: 'name', headerName: 'Name', width: 130 },
      {
        field: 'value',
        headerName: 'Value',
        width: 130,
        valueGetter: (attributes) =>
          `${attributes.value || ''} ${attributes.unit || ''}`,
      },
    ];

    return (
      <div style={{ height: 400, width: '50%' }}>
        <DataGrid
          rows={attributes}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    );
  }
}

export default ItemAttributes;