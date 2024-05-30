export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex py-[20px] px-[24px]  gap-4 min-h-screen w-screen'>
      {children}
    </div>
  )
}
