import * as ScoreAction from "../actions/getScores";

export const defaultState = {
    scoresLoading: true,
    count: 0,
    error: false,
    date: "2021-01-01",
    games: [],
};

const getGameScores = (state = defaultState, action) => {
    switch (action.type) {
        case ScoreAction.GET_SCORES: {
            if ("count" in action.payload) {
                return {
                    ...defaultState,
                    scoresLoading: false,
                    error: false,
                    count: action.payload.count,
                    date: action.payload.date,
                    games: action.payload.games,
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

export default getGameScores;

export const areScoresLoading = (state) => state.scoresLoading;
export const getCount = (state) => state.count;
export const getGamesDate = (state) => state.date;
export const getScoreError = (state) => state.error;
export const getGamesList = (state) => state.games;
