import {
  CalendarIcon,
  CheckIcon,
  FolderIcon,
  InboxIcon,
  PlusIcon,
  SearchIcon,
} from '@iconicicons/react'
import LogoIcon from '../components/logo'
import Link from 'next/link'
import { cx } from '../lib/cx'
import Image from 'next/image'

const navLinks = [
  { text: 'Tasks', icon: CheckIcon },
  { text: 'Inbox', icon: InboxIcon },
  { text: 'Schedules', icon: CalendarIcon },
  { text: 'Files', icon: FolderIcon },
]
const clients = [
  { text: 'Linear', imgUrl: '/linear.png' },
  { text: 'Tesla', imgUrl: '/tesla.png' },
  { text: 'Stripe', imgUrl: '/stripe.png' },
  { text: 'InVision', imgUrl: '/invision.png' },
  { text: 'Norton', imgUrl: '/norton.png' },
]
const messages = [
  { text: 'JamesM', imgUrl: '/designer-james.png' },
  { text: 'Orman', imgUrl: '/designer-orman.png' },
]

export default function Aside() {
  return (
    <aside>
      <div className='flex justify-between w-64 '>
        <LogoIcon className='w-7 h-7' />

        <SearchIcon className='text-body hover:cursor-pointer' />
      </div>
      <nav className='mt-[32px]'>
        {navLinks.map((link) => (
          <Link
            href='#'
            className={cx(
              'w-fill h-[44px] place-items-center flex  hover:bg-hover-color px-2 rounded-md gap-[6px] text-body',
              link.text === 'Tasks' && 'bg-hover-color text-foreground'
            )}
          >
            <span>
              <link.icon
                className={cx(
                  'text-body',
                  link.text === 'Tasks' && 'bg-hover-color text-foreground'
                )}
              />
            </span>
            {link.text}
          </Link>
        ))}
      </nav>
      <div className='mt-[32px]'>
        <h3 className='text-heading flex justify-between mb-[6px]'>
          Clients
          <span className='hover:cursor-pointer'>
            <PlusIcon className='text-heading' />
          </span>
        </h3>
        {clients.map((client) => (
          <Link
            href='#'
            className={cx(
              'w-fill h-[44px] place-items-center flex  hover:bg-hover-color px-2 rounded-md gap-[6px] text-body',
              client.text === 'Tasks' && 'bg-hover-color text-foreground'
            )}
          >
            <span>
              <Image
                className='h-6 w-6'
                src={client.imgUrl}
                width={24}
                height={24}
                alt={client.text}
              />
            </span>
            {client.text}
          </Link>
        ))}
      </div>
      <div className='mt-[32px]'>
        <h3 className='text-heading flex justify-between mb-[6px]'>
          Messages
          <span className='hover:cursor-pointer'>
            <PlusIcon className='text-heading' />
          </span>
        </h3>
        {messages.map((message) => (
          <Link
            href='#'
            className={cx(
              'w-fill h-[44px] place-items-center flex  hover:bg-hover-color px-2 rounded-md gap-[6px] text-body',
              message.text === 'Tasks' && 'bg-hover-color text-foreground'
            )}
          >
            <span>
              <Image
                className='h-6 w-6'
                src={message.imgUrl}
                width={24}
                height={24}
                alt={message.text}
              />
            </span>
            {message.text}
          </Link>
        ))}
      </div>
    </aside>
  )
}
