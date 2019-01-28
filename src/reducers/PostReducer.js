import { ADD_POST, DELETE_POST } from '../actions/ActionTypes';

export default function postReducer(state = [], action) {
    switch (action.type) {
        case ADD_POST:
            console.log("state and action >> add ",state, action);
            return [...state, action.payload];
        case DELETE_POST:
            console.log("state and action >> delete ",state, action);
            return state.filter(post => post.id !== action.payload.id);
        default:
            return state;
    }
}