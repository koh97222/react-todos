import React from "react";
import { DataGrid } from "@material-ui/data-grid";

interface TableProps {
  columns: any;
  height: number;
  rows: any;
  width: string;
}

/**
 * DataGridをラップしたコンポーネント
 * @todo: いい感じにレスポンシブにならないものか・・
 * @param props
 */
const WrapDataTable = (props: TableProps) => {
  return (
    <div style={{ height: props.height, width: props.width }}>
      <DataGrid rows={props.rows} columns={props.columns} />
    </div>
  );
};

export default WrapDataTable;
