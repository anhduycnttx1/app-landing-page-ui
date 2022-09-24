import React from 'react'

type SectionsWrapperProps = {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

export default function SectionsWrapper({ children }: SectionsWrapperProps) {
  return <div className="w-full my-2">{children}</div>
}
