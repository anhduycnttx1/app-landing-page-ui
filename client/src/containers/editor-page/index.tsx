import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'

import { arrayMove, SortableContext, sortableKeyboardCoordinates, rectSortingStrategy } from '@dnd-kit/sortable'
import { Button, Row, Space } from 'antd'
import React, { useState } from 'react'
import { EditorLayoutUI, SectionsWrapper, SortableSection, EmptySectionPagePanel } from '../../components'
import { v4 as uuidv4 } from 'uuid'

type EditorContainerProps = {
  pageId: string | string[] | undefined
}

export type SectionType = {
  id: string | number
  name: string
  widgets: never[]
  column: number
  index: number
  type: string
}

export default function NewResourceContainer(props: EditorContainerProps) {
  const [sections, setSections] = useState<SectionType[]>([])
  const [activeId, setActiveId] = useState(null)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
  const handlerButtonAddSection = () => {
    const newId = uuidv4()
    setSections([
      ...sections,
      {
        id: newId,
        index: sections.length,
        name: 'SECTION',
        widgets: [],
        column: 1,
        type: 'section',
      },
    ])
  }
  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <EditorLayoutUI>
          <SortableContext items={sections.map((section) => section.id)} strategy={rectSortingStrategy}>
            {sections[0] ? (
              <SectionsWrapper>
                <Space direction="vertical" className="w-full">
                  {sections.map((section, index) => (
                    <SortableSection id={section.id} sections={sections} setSections={setSections} key={index}>
                      <SectionPanel section={section} />
                    </SortableSection>
                  ))}
                  <DragOverlay>
                    {activeId ? (
                      <div
                        style={{
                          backgroundColor: 'red',
                        }}
                      ></div>
                    ) : // id={activeId}
                    // page={pages.find((page) => `sortable-${page.id}` === activeId)}

                    null}
                  </DragOverlay>
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
          </SortableContext>
        </EditorLayoutUI>
      </DndContext>
    </>
  )
  function handleDragStart(event: any) {
    setActiveId(event.active.id)
  }
  function handleDragEnd(event: any) {
    const { active, over } = event
    if (active.id !== over.id) {
      setSections((sections) => {
        const oldIndex = sections.findIndex((section: SectionType) => section.id === active.id)
        const newIndex = sections.findIndex((section: SectionType) => section.id === over.id)

        return arrayMove(sections, oldIndex, newIndex)
      })
    }
    setSections((sections) => {
      return sections.map((section, index) => ({ ...section, index }))
    })
  }
}
// ====================================
type SectionPanelProps = {
  section: SectionType
  setSection?: any
}

function SectionPanel({ section, setSection }: SectionPanelProps) {
  const { widgets } = section
  return <div className="px-2 py-1">{widgets[0] ? <div>as</div> : <EmptySectionPagePanel />}</div>
}
//   const [activeId, setActiveId] = useState(null)

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
