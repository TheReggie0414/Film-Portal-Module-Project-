export const LIKE_FILM = 'LIKE_FILM';

export const likeFilm = (filmIndex) => ({
    type: LIKE_FILM,
    payload: { filmIndex },
});