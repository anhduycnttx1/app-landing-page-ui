import React from 'react'

export function EmptySidebarPagePanel() {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 border-2 border-dashed sm:p-6 sm:py-10">
        <p className="text-base text-gray-300">No more pages left</p>
      </div>
    </div>
  )
}

type PropsSidebarPagelPanel = {
  page: any
}

export default function SidebarPagePanel({ page }: PropsSidebarPagelPanel) {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{page.title}</h3>
        <div className="max-w-xl mt-2 text-sm text-gray-500">
          <p>{page.summary}</p>
        </div>
      </div>
    </div>
  )
}
