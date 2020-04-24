import valuesReducer from './ValuesReducer'
import {createStore} from 'redux'
import {devToolsEnhancer} from 'redux-devtools-extension'

export default createStore(valuesReducer, devToolsEnhancer())