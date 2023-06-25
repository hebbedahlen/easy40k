import React from 'react'

import { chaos, xenos, imperium } from '../model'
import Link from 'next/link'

export default function New() {
  return (
    <div>
      <h2 className="text-3xl mb-4">Imperium</h2>
      <div className="grid  grid-cols-2 gap-4">
        {Object.entries(imperium).map(([key, value]) => (
          <Link
            key={key}
            className="border p-4  w-32 h-28 text-center cursor-pointer"
            href={`new/${key}`}
          >
            {value}
          </Link>
        ))}
      </div>
      <h2 className="text-3xl  my-4">Chaos</h2>
      <div className="grid  grid-cols-2 gap-4">
        {Object.entries(chaos).map(([key, value]) => (
          <Link
            key={key}
            className="border p-4  w-32 h-28 text-center cursor-pointer"
            href={`new/${key}`}
          >
            {value}
          </Link>
        ))}
      </div>
      <h2 className="text-3xl my-4">Xenos</h2>
      <div className="grid  grid-cols-2 gap-4">
        {Object.entries(xenos).map(([key, value]) => (
          <Link
            key={key}
            className="border p-4  w-32 h-28 text-center cursor-pointer"
            href={`new/${key}`}
          >
            {value}
          </Link>
        ))}
      </div>
    </div>
  )
}
