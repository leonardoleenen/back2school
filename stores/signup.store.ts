import { Store } from 'pullstate'

interface IUISignUpStore {
    user: User
    alumnis: Array<Alumni>
    invite: any
}

export const UISignUpStore = new Store<IUISignUpStore>({
    user: null,
    alumnis: [],
    invite: null
})
