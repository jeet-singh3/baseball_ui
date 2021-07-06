import * as PlayerSearch from "../actions/getPlayers";

export const defaultState = {
    playersLoading: true,
    error: false,
    count: 0,
    players: [],
};

const fetchPlayers = (state = defaultState, action) => {
    switch (action.type) {
        case PlayerSearch.GET_PLAYERS: {
            if ("count" in action.payload) {
                return {
                    ...defaultState,
                    scoresLoading: false,
                    error: false,
                    count: action.payload.count,
                    players: action.payload.players,
                };
            }
            return {
                ...defaultState,
                scoresLoading: false,
                error: true,
            };
        }
        default: {
            return state;
        }
    }
};

export default fetchPlayers;

export const arePlayersLoading = (state) => state.playersLoading;
export const getCount = (state) => state.count;
export const getPlayersSearchError = (state) => state.error;
export const getPlayersList = (state) => state.players;
