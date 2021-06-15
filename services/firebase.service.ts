import firebase from 'firebase/app'
import 'firebase/auth'
import '@firebase/firestore'
import { randomString } from '../utils'
import { authService } from './auth.service'

class FirebaseManager {
  private firebaseConfig = JSON.parse(
    Buffer.from(process.env.FIREBASE_CONFIG, 'base64').toString()
  )

  private firebaseApp = null

  constructor() {
    if (!firebase.apps.length) {
      this.firebaseApp = firebase.initializeApp(this.firebaseConfig)
    } else {
      this.firebaseApp = firebase.app() // if already initialized, use that one
    }
  }

  getDB() {
    return firebase.firestore()
  }

  getFirebaseApp() {
    return this.firebaseApp
  }

  private async fetchFamilyData(rawData): Promise<Family> {
    const family: Family = {
      familyName: rawData.familyName,
      tutors: [],
      alumni: []
    }

    for (const tutor of rawData.tutors) {
      const user: User = (
        await this.getDB().collection('users').doc(tutor).get()
      ).data() as User

      family.tutors.push(user)
    }

    for (const student of rawData.alumni) {
      const alumni: Alumni = (
        await this.getDB().collection('alumni').doc(student).get()
      ).data() as Alumni
      family.alumni.push(alumni)
    }

    return family
  }

  async getFamily(tutorName: string): Promise<Array<Family>> {
    const families = (
      await this.getDB()
        .collection('family')
        .where('tutors', 'array-contains', tutorName)
        .get()
    ).docs.map(f => f.data())

    const finalList = []

    for (const fam of families) {
      finalList.push(await this.fetchFamilyData(fam))
    }
    return finalList
  }

  getUser(userid: string): Promise<User> {
    return this.getDB()
      .collection('users')
      .doc(userid)
      .get()
      .then(doc => doc.data() as User)
  }

  createUserAndFamily(user: User, alumnis: Array<Alumni>) {
    const familyId = randomString()
    Promise.all(
      alumnis.map(a => this.getDB().collection('alumni').doc(a.id).set(a))
    )
    return Promise.all([
      this.getDB().collection('users').doc(user.id).set(user),
      this.getDB()
        .collection('family')
        .doc(familyId)
        .set({
          familyName: user.name,
          alumni: alumnis.map(a => a.id),
          tutors: [user.id]
        })
    ])
      .then(() => authService.createToken(user))
      .catch(err => console.log(err))
  }
}

export const firebaseManager = new FirebaseManager()
