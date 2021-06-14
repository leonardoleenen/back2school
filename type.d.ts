/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
type User = {
  id: string
  name: string
  avatar: string
}

type Alumni = {
  firstName: string
  lastName: string
  id: string
  college: string
  photo: string
}
type Family = {
  familyName: string
  tutors: Array<User>
  alumni: Array<Alumni>
}

type AbsenteCase = {
  alumni: Alumni
  creator: User
  landedAt: string
  status: 'OPEN' | 'CLOSE' | 'RESIGNED'
  category: 'HEALTH' | 'TRAVEL' | 'OCCASIONAL'
  priority: 'URGENT' | 'IMPORTANT' | 'MEDIUM' | 'LOWER'
  entries: Array<{
    eventId: string
    eventPayload: any
  }>
  absenteFrom: string
  absenteTo?: string
}
