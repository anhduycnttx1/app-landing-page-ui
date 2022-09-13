import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
} from '@dnd-kit/core'

import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Button, Row, Space } from 'antd'
import React, { useState } from 'react'
import { EditorLayoutUI, EmptySectionPagePanel, SectionPanelUI, SectionsWrapper, Sortable } from '../../components'
import { v4 as uuidv4 } from 'uuid'

type EditorContainerProps = {
  pageId: string | string[] | undefined
}
type SectionsType = { id: string | number; name: string; widgets: never[]; column: number; index: number; type: string }

export default function NewResourceContainer(props: EditorContainerProps) {
  const [sections, setSections] = useState<SectionsType[]>([])
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  console.log(sections)
  const handlerButtonAddSection = () => {
    const newId = uuidv4()
    setSections([
      ...sections,
      {
        id: newId,
        index: sections.length,
        name: `Section New`,
        widgets: [],
        column: 1,
        type: 'section',
      },
    ])
  }
  return (
    <>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={sections.map((section) => section.id)} strategy={verticalListSortingStrategy}>
          <EditorLayoutUI>
            {sections[0] ? (
              <SectionsWrapper>
                <Space direction="vertical" className="w-full">
                  {sections.map((section, index) => (
                    <Sortable id={section.id} key={index}>
                      <div className="px-5 py-2 shadow-sm cursor-pointer">
                        {section.name} - id:
                        {section.id}
                      </div>
                    </Sortable>
                  ))}
                  <Row className="w-full py-3" justify="center" align="middle">
                    <Button onClick={handlerButtonAddSection} type="link">
                      Thêm mới Sections
                    </Button>
                  </Row>
                </Space>
              </SectionsWrapper>
            ) : (
              <Row className="w-full min-h-[300px]" justify="center" align="middle">
                <Button onClick={handlerButtonAddSection} type="primary">
                  Thêm mới Sections
                </Button>
              </Row>
            )}
          </EditorLayoutUI>
        </SortableContext>
      </DndContext>
    </>
  )
  function handleDragEnd(event: any) {
    const { active, over } = event

    if (active.id !== over.id) {
      console.log(event)
      setSections((sections) => {
        const oldIndex = sections.findIndex((section: SectionsType) => section.id === active.id)
        const newIndex = sections.findIndex((section: SectionsType) => section.id === over.id)

        return arrayMove(sections, oldIndex, newIndex)
      })
    }
    setSections((sections) => {
      return sections.map((section, index) => ({ ...section, index }))
    })
  }
}
// ====================================
// type SectionPanelProps = {
//   section: SectionsType
//   setSection: any
// }

// function SectionPanel({ section, setSection }: SectionPanelProps) {
//   const [activeId, setActiveId] = useState(null)
//   const { widgets } = section

//   const sensors = useSensors(
//     useSensor(PointerSensor),
//     useSensor(KeyboardSensor, {
//       coordinateGetter: sortableKeyboardCoordinates,
//     })
//   )

//   return (
//     <>
//       <SectionPanelUI section={section}>
//         <DndContext
//           sensors={sensors}
//           collisionDetection={closestCenter}
//           onDragEnd={handleDragEnd}
//           onDragStart={handleDragStart}
//         >
//           <SortableContext
//             items={widgets.map((widget) => `widget-${widgets.length + 1}`)}
//             strategy={verticalListSortingStrategy}
//           >
//             {widgets.map((widget, index) => (
//               <div key={index}>widgettest</div>
//             ))}
//             <EmptySectionPagePanel />
//           </SortableContext>
//           <DragOverlay>{activeId ? <div>abc</div> : null}</DragOverlay>
//         </DndContext>
//       </SectionPanelUI>
//     </>
//   )
//   function handleDragStart(event: any) {
//     const { active } = event

//     setActiveId(active.id)
//   }

//   function handleDragEnd(event: any) {
//     const { active, over } = event

//     if (active.id !== over.id) {
//       const widgetsClone = Object.assign([], section.widgets)
//       const oldIndex = widgetsClone.findIndex((widget) => `widget-${widgets.length + 1}` === active.id)
//       const newIndex = widgetsClone.findIndex((widget) => `widget-${widgets.length + 1}` === over.id)
//       setSection({ ...section, widgets: arrayMove(widgets, oldIndex, newIndex) })
//     }
//     setActiveId(null)
//   }
// }
