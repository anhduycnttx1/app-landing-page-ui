import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Button, Row, Space, Tooltip } from 'antd'
import { DeleteOutlined, EditOutlined, HolderOutlined } from '@ant-design/icons'
import { SectionType } from '../containers/editor-page'

type SortableItemProps = {
  children: React.ReactElement
  sections: SectionType[]
  setSections: React.Dispatch<React.SetStateAction<SectionType[]>>
  id: number | string
}

export default function SortableSection({ children, sections, setSections, id }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    border: '1px solid #f3f4f6',
    zIndex: isDragging ? '100' : 'auto',
    boxShadow: isDragging ? '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' : '0 0 #0000',
  }

  const handleDeleteBtn = () => {
    const newSection = [...sections]
    const index = newSection.findIndex((item) => item.id === id)
    newSection.splice(index, 1)
    setSections(newSection.map((item, index) => ({ ...item, index })))
  }

  return (
    <Row className="p-2 " align="middle" ref={setNodeRef} style={style}>
      <div className="flex-1">{children}</div>
      <Space direction="vertical" className="flex-none">
        <Tooltip placement="right" title={<span>Di chuyển</span>}>
          <Button type="text" icon={<HolderOutlined />} {...attributes} {...listeners} />
        </Tooltip>
        <Tooltip placement="right" title={<span>Chỉnh sửa</span>}>
          <Button type="text" icon={<EditOutlined />} />
        </Tooltip>
        <Tooltip placement="right" title={<span>Xoá</span>}>
          <Button type="text" icon={<DeleteOutlined />} onClick={handleDeleteBtn} />
        </Tooltip>
      </Space>
    </Row>
  )
}
