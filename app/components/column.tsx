import { DotsHorizontalIcon, PlusIcon } from '@iconicicons/react'
import { cx } from '../lib/cx'
import Card from './card'
import { Card as CardType, Columns } from '../lib/types'
import DropArea from './drop-area'

type ColumnProps = {
  title: string
  id: Columns
  cards: CardType[]
  onDrop: (column: Columns, index: number) => void
}

export default function Column({ title, id, cards, onDrop }: ColumnProps) {
  return (
    <div
      key={id}
      className='border border-color-border rounded-[17.53px] pt-[10px] px-[10px] h-fit w-[291.6px]'
    >
      <div className='flex place-items-center '>
        <div className={cx('w-4 h-4 rounded-[100%] mr-2 ')}></div>
        <h3 className='text-lg'>{title}</h3>
        <div className='ml-auto flex text-body hover:cursor-pointer'>
          <PlusIcon />
          <DotsHorizontalIcon />
        </div>
      </div>
      <div className=''>
        <DropArea onDrop={() => onDrop(id, 0)} />
        {cards.map((card, index) => (
          <>
            <Card {...card} />
            <DropArea onDrop={() => onDrop(id, index + 1)} />
          </>
        ))}
      </div>
    </div>
  )
}
