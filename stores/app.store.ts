import { Store } from 'pullstate'

interface IUIAppStore {
  activeFamily: Family
}

export const UIAppStore = new Store<IUIAppStore>({
  activeFamily: null
})
