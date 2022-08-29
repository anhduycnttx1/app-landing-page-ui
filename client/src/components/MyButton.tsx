import React from 'react'

type PropsButton = {
  children: React.ReactElement
}

export default function MyButton({ children, ...rest }: PropsButton) {
  return (
    <button className="px-4 py-2 text-white bg-indigo-500 rounded" {...rest}>
      {children}
    </button>
  )
}
