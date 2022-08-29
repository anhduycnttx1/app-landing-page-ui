import React from 'react'

export function EmptySectionPagePanel() {
  return (
    <div className="mt-5">
      <div className="px-6 py-6 border-2 border-gray-200 border-dashed rounded-md shadow bg-gray-50">
        <p className="text-xl font-semibold text-gray-300">Drag and Drop the page from the sidebar here.</p>
      </div>
    </div>
  )
}
type PropsSectionPagePanel = {
  page: any
}

const SectionPagePanel = ({ page, ...rest }: PropsSectionPagePanel, ref: any) => {
  return (
    <div className="mt-5" ref={ref} {...rest}>
      <div className="px-6 py-5 rounded-md shadow bg-gray-50 sm:flex sm:items-start sm:justify-between">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 sm:mt-0 sm:ml-4">
            <div className="text-sm font-medium text-gray-900">{page.title}</div>
            <div className="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
              <div>{page.summary}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionPagePanel
