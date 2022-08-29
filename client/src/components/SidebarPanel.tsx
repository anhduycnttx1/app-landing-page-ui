import React from 'react'
type PropsSidebarPanel = {
  children: any
}
export default function SidebarPanel({ children }: PropsSidebarPanel) {
  return <div className="px-6 py-6 space-y-4 overflow-y-auto">{children}</div>
}
