// reducers.js
import { LIKE_FILM } from './actions';

const initialState = {
    likes: [],
};

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIKE_FILM:
            const { filmIndex } = action.payload;
            return {
                ...state,
                likes: [...state.likes, filmIndex],
            };

        default:
            return state;
    }
};

export default filmReducer;