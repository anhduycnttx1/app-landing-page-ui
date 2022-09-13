import React from 'react'
type PageEditorLayoutProps = {
  sidebarLeft?: any
  sidebarRight?: any
  children: any
}
export default function PageEditorLayout({ sidebarLeft, sidebarRight, children }: PageEditorLayoutProps) {
  return (
    <div className="flex justify-center overflow-hidden">
      <div className="fixed w-24 overflow-y-auto h-60 bg-slate-400 left-10 top-40">sidebarLeft</div>
      <div className="flex-1 max-w-[960px] min-h-[300px] bg-white">{children}</div>
      <div className="fixed w-24 overflow-y-auto h-60 bg-slate-400 right-10 top-40 ">sidebarRight</div>
    </div>
  )
}
