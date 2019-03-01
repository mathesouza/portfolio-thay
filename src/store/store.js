import { createStore } from 'redux'

const initialState = {
    isLogged:false,
    isAuthing:true,
}

function reducer(state = initialState,action){
    switch(action.type){
        case 'LOGINFAILED':
            return Object.assign({}, state, {isLogged:false,isAuthing:false})
        case 'LOGINSUCESS':
            return Object.assign({}, state, {isLogged:true,isAuthing:false})
        default:
            return state
    }
}

const store = createStore(reducer)

export default store