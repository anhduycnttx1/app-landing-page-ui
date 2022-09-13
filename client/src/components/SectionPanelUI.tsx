import React from 'react'
type PropsSectionPanel = {
  section: { id: string; title: string; widgets: never[] }
  children: any
}
export default function SectionPanelUI({ section, children }: PropsSectionPanel) {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{section.title}</h3>
        <div className="flex gap-5">{children}</div>
      </div>
    </div>
  )
}
