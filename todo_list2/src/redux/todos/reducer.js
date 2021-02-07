import { ADD_TODO } from './actionTypes'

const initialState = []


export const todos = (state = initialState, { type, todo}) => {
    switch (type) {
        case ADD_TODO:
            return [ ...state, todo]  /* === state.push(todo) */
            

    default: return state
        
    }

}