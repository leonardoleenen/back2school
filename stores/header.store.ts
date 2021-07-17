import { Store } from 'pullstate'

interface IUIHeaderStore {
  selectedTab: 'DASHBOARD' | 'ACCESS'
}

export const UIHeaderStore = new Store<IUIHeaderStore>({
  selectedTab: 'DASHBOARD'
})
