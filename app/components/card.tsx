import Image from 'next/image'
import type { Card as CardType } from '../lib/types'
import { MessageIcon } from '@iconicicons/react'
import { useBoardStore } from '../lib/board-store'
type CardProps = CardType

export default function Card({
  content,
  clientName,
  imgUrls,
  id,
  time,
}: CardProps) {
  const { setDraggingCard } = useBoardStore()
  return (
    <div
      draggable
      onDragStart={() => setDraggingCard(id)}
          onDragEnd={() => setDraggingCard(null)}
          style={{viewTransitionName: `card-${id}`}}
      className='w-full bg-main-card-foreground p-[12.5px] rounded-[12.5px] border border-color-border shadow-md relative active:animate-pulse'
      key={id}
    >
      <div className='flex w-full justify-between place-items-center '>
        <div className='flex '>
          <Image
            src={imgUrls[0]}
            className='w-6 h-6 mr-[7.5px]'
            width={24}
            height={24}
            alt=''
          />
          <h3>{clientName}</h3>
        </div>

        <div className='ml-auto flex -space-x-3'>
          <Image
            src={imgUrls[1]}
            className='w-6 h-6 z-10'
            width={24}
            height={24}
            alt=''
          />
          <Image
            src={imgUrls[2]}
            className='w-6 h-6'
            width={24}
            height={24}
            alt=''
          />
        </div>
      </div>
      <p className='my-[10px]'>{content}</p>
      <div className='h-px w-full absolute left-0 right-0 bg-color-border' />
      <div className=' pt-[8px] flex justify-between place-items-center text-body'>
        <div className='flex items-center'>
          <MessageIcon /> <span>4</span>
        </div>
        <div className='ml-auto'>{time}</div>
      </div>
    </div>
  )
}
