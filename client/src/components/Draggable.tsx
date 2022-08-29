import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import React from 'react'

type PropsDraggable = {
  children: React.ReactElement
  id: string | number
}

export default function Draggable({ children, id }: PropsDraggable) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  })
  const style = {
    transform: CSS.Translate.toString(transform),
  }

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  )
}
