import { Store } from 'pullstate'

interface IUIAbsenteStore {
  almuniSelected: Alumni
}

export const UIAbsenteStore = new Store<IUIAbsenteStore>({
  almuniSelected: null
})
