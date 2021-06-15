import { Store } from 'pullstate'

interface IUISignUpStore {
  user: User
  alumnis: Array<Alumni>
}

export const UISignUpStore = new Store<IUISignUpStore>({
  user: null,
  alumnis: []
})
