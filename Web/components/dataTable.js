import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";

export default function DataTable({ columns, rows }) {
  return (
    <div style={{ width: "100%" }}>
      <div className="text-white">
        <DataGrid
          className="text-white"
          columns={columns}
          rows={rows}
          autoHeight
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
            sorting: {
              sortModel: [{ field: 'datetime', sort: 'desc' }],
            },
          }}
          sx={{
            boxShadow: 1.5,
            border: 2,
            borderColor: "gray",
            color: "white",
            "& .MuiDataGrid-row": {
              backgroundColor: "#37465c",
              color: "white",
              "&:hover": {
                backgroundColor: "lightgrey",
                color: "black",
              },
            },
            "& .super-app-theme--header": {
              backgroundColor: "#37465c",
              color: "white",
            },
            "& .MuiIconButton-root": {
              backgroundColor: "white",
            },
            "& .MuiSvgIcon-root": {
              color: "black",
            },
            "& .MuiDataGrid-footerContainer,.MuiTablePagination-root": {
              backgroundColor: "#37465c",
              color: "white",
            },
          }}
          pageSizeOptions={[10, 15, 20]}
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
}
