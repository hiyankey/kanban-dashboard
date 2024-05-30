'use client'

import { useState } from 'react'
import { cx } from '../lib/cx'

type DropAreaProps = {
  onDrop: () => void
}

export default function DropArea({ onDrop }: DropAreaProps) {
  const [isVisible, setIsVisible] = useState(false)

  const showArea = () => setIsVisible(true)
  const hideArea = () => setIsVisible(false)

  return (
    <div
      className={cx(
        ' relative h-[10px]  transition-[padding, opacity] before:absolute before:inset-y-2 before:w-full before:border-dashed before:border-color-border before:border before:rounded-[12.5px] before:bg-hover-color',
        isVisible && 'py-8 opacity-100',
        !isVisible && 'opacity-0'
      )}
      onDragEnter={showArea}
      onDragLeave={hideArea}
      onDrop={() => {
        onDrop()
        hideArea()
          }}
          onDragOver={ev=> ev.preventDefault()}
    ></div>
  )
}
