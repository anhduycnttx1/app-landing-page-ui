import { Table } from 'antd'
import React from 'react'
import type { ColumnsType } from 'antd/es/table'

type PropsTableLadiPages = {
  columns: ColumnsType<any>
  datas: any
}

function TableLadiPages({ columns, datas }: PropsTableLadiPages) {
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    getCheckboxProps: (record: any) => ({}),
  }
  return (
    <Table
      rowSelection={{
        type: 'checkbox',
        ...rowSelection,
      }}
      columns={columns}
      dataSource={datas}
    />
  )
}

export default TableLadiPages
