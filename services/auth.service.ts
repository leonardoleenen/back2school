import jwt from 'jsonwebtoken'
import { firebaseManager } from './firebase.service'


class Auth {
  setToken = (token: string): void => {
    localStorage.setItem('back2school:token', token)
  }

  getToken = (): string => localStorage.getItem('back2school:token')

  stablishSession = (token: string): void => {
    this.setToken(token)
  }

  verifyToken = (token: string): boolean => {
    try {
      return jwt.verify(token, 'back2school')
    } catch (ex) {
      return false
    }
  }

  createToken = (user: User): string => {
    const token = jwt.sign({ user: user }, 'back2school')
    this.setToken(token)
    return token
  }

  getUserData = (): User => {
    return jwt.verify(this.getToken(), 'back2school').user
  }

  doLogin = async (userId): Promise<User>  => {
    return await firebaseManager
      .getDB()
      .collection('users')
      .doc(userId)
      .get().then(doc => doc.data() as User)
  } 

  doLogout = () => {
    localStorage.clear()
  }
}

export const authService = new Auth()
