import React from 'react'
type PropsSidebarLayout = {
  sidebar: any
  children: any
}
export default function SidebarLayout({ sidebar, children }: PropsSidebarLayout) {
  return (
    <div className="flex overflow-hidden">
      <div className="w-64 overflow-y-auto">{sidebar}</div>
      <div className="flex-1">{children}</div>
    </div>
  )
}
