import uniqueId from 'uuid/v4';
import { ADD_POST, DELETE_POST } from './ActionTypes';

export const createPost = ({ title, body }) => ({
    type: ADD_POST,
    payload: {
        id: uniqueId(),
        title,
        body
    }
});

export const deletePost = id => ({
    type: DELETE_POST,
    payload: {
        id
    }
});