import { createStore } from 'redux';
import filmReducer from './reducers';

const savedLikes = JSON.parse(localStorage.getItem('likes')) || [];

const initialState = {
    likes: savedLikes,
};

const store = createStore(filmReducer, initialState);

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('likes', JSON.stringify(state.likes));
});

export default store;