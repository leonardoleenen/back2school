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
  course: {
    college: string
    level: string
    house: string
  }
  photo: string
  securityHeath: string
  numberSecurityHealth: string
  genre: 'M' | 'F'
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
