import { createStore } from 'redux';
import { LOGINSUCCESS, LOGINFAILED } from './action-types'

const initialState = {
    isLogged:false,
    isAuthing:true,
}

function reducer( state = initialState, action ) {
    switch(action.type){
        case LOGINSUCCESS:
            return {...state, isLogged: true, isAuthing: false }
        case LOGINFAILED:
            return {...state, isLogged: false, isAuthing: false }
        default:
            return state
    }
}

const store = createStore(reducer)

export default store;