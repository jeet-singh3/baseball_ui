import * as PitcherGameSummaryAction from "../actions/getPitcherSummaryForGames";

export const defaultState = {
    loading: true,
    error: false,
    games: [],
};

const getGamesByPitcher = (state = defaultState, action) => {
    switch (action.type) {
        case PitcherGameSummaryAction.GET_PITCHER_SUMMARY_FOR_GAMES: {
            return {
                ...defaultState,
                loading: false,
                error: false,
                games: action.payload.games_summary,
            };
        }
        default: {
            return state;
        }
    }
};

export default getGamesByPitcher;

export const areGamesByPitcherLoading = (state) => state.loading;
export const getGamesByPitcherError = (state) => state.error;
export const getGamesPitchedByPitcher = (state) => state.games;
