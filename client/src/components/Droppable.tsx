import { useDroppable } from '@dnd-kit/core'
import React from 'react'
type PropsDroppable = {
  children: React.ReactElement
  id: string | number
}
export default function Droppable({ children, id }: PropsDroppable) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  })
  const style = {}

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`rounded-md ${isOver ? 'ring-2 ring-offset-4 ring-indigo-500' : ''}`}
    >
      {children}
    </div>
  )
}
