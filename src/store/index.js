import { persistStore } from 'redux-persist'
import { createStore } from 'redux'
import rootReducer from '~/store/rootReducer'
import persistReducers from '~/store/persistReducers'

const store = createStore(persistReducers(rootReducer))
const persistor = persistStore(store)

export { store, persistor }
