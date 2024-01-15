import { createStore } from 'redux';
import filmReducer from './reducers';

// Попытайтесь извлечь сохраненные лайки из localStorage
const savedLikes = JSON.parse(localStorage.getItem('likes')) || [];

const initialState = {
    likes: savedLikes,
};

const store = createStore(filmReducer, initialState);

// Подписывайтесь на изменения в хранилище и сохраняйте лайки в localStorage при каждом обновлении состояния
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('likes', JSON.stringify(state.likes));
});

export default store;