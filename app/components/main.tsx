'use client'
import Link from 'next/link'
import { Columns } from '../lib/types'
import { cx } from '../lib/cx'
import Column from './column'
import { useState } from 'react'
import { initialCards } from '../lib/data'
import { useBoardStore } from '../lib/board-store'
import { moveCardToColumn } from '../lib/utils'
import { flushSync } from 'react-dom'

const columnTitles: { [key in Columns]: string } = {
  [Columns.TODO]: 'Todo',
  [Columns.ACTIVE_REQUESTS]: ' Awaiting request',
  [Columns.FEEDBACKS]: 'Feedbacks',
  [Columns.APPROVALS]: 'Approval',
}

const columns = Object.entries(columnTitles) as unknown as [Columns, string][]

const navLinks = ['All', 'Today', 'Tomorrow', 'This week']

export default function Main() {
  const [cards, setCards] = useState(initialCards)
  const { draggingCard } = useBoardStore()

  const onDrop = (column: Columns, index: number) => {
    if (!draggingCard) return
    const newCards = moveCardToColumn({
      cards,
      cardId: draggingCard,
      column,
      index,
    })

    setCards(newCards)

    document.startViewTransition(() => flushSync(() => setCards(newCards)))
  }
  return (
    <main className='bg-main-foreground w-full min-h-full p-[24px] rounded-[32px] flex-1 overflow-y-auto flex-grow-1'>
      <nav>
        <ul className='flex space-x-[6px]'>
          {navLinks.map((link) => (
            <Link
              className={cx(
                'p-3 text-body hover:bg-hover-color  rounded-md',
                link === 'All' && 'bg-hover-color text-foreground'
              )}
              href='#'
            >
              {link}
            </Link>
          ))}
        </ul>
      </nav>
      <div className='flex mt-[20px] space-x-[16px]'>
        {columns.map(([columnId, columnTitle]) => (
          <Column
            title={columnTitle}
            id={columnId}
            cards={cards[columnId]}
            onDrop={onDrop}
          />
        ))}
      </div>
    </main>
  )
}
