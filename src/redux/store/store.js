import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer'
import {persistStore,persistReducer} from 'redux-persist'
//import storage from 'redux-persist/lib/storage'
import storage from '@react-native-community/async-storage'
import logger from 'redux-logger'

const middleWares=[thunk]

const persistConfig={
    key:'root',
    storage,
    whitelist:['UserReducer']
}

const persistedReducer=persistReducer(persistConfig,rootReducer)

// if (_DEV_) {
//     middleWares.push(logger)
// }

export default function configureStore(){
    const enhancers=compose(applyMiddleware(...middleWares))

    const store=createStore(persistedReducer,enhancers)

    if (module.hot) {
        const acceptCallback=()=>{
            store.replaceReducer(rootReducer)
        }
        module.hot.accept('reducers/index',acceptCallback)
        module.hot.acceptCallback=acceptCallback
    }

    let persist=persistStore(store,persistedReducer)
    return {store,persist}
}