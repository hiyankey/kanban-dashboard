import { atom, useAtom } from 'jotai'

const draggingCardAtom = atom<number | null>(null)

export const useBoardStore = () => {
  const [draggingCard, setDraggingCard] = useAtom(draggingCardAtom)

  return {
    draggingCard,
    setDraggingCard,
  }
}
