import { createStore } from 'redux'

const initialState = {
    logged:false
}

function reducer(state = initialState,action){
    switch(action.type){
        case 'LOGGED':
            console.log(Object.assign({}, state, {logged:true}))
            return Object.assign({}, state, {logged:true})
        default:
            return state
    }
}

const store = createStore(reducer)

export default store