export enum Columns {
  TODO,
  ACTIVE_REQUESTS,
  FEEDBACKS,
  APPROVALS,
}

export type Card = {
  id: number
  clientName: string
  imgUrls: string[]
  content: string
  time: string
}

export type Cards = { [key in Columns]: Card[] }
