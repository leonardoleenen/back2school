import { Store } from 'pullstate'

interface IUIHeaderStore {
    selectedTab: 'DASHBOARD' | 'ACCESS' | 'REPORT' | 'ABSENT'
}

export const UIHeaderStore = new Store<IUIHeaderStore>({
    selectedTab: 'DASHBOARD'
})
