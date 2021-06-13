import jwt from 'jsonwebtoken'

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

  getUserData = (): User => {
    return jwt.verify(this.getToken(), 'back2school').user
  }
}

export const authService = new Auth()
