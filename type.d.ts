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
