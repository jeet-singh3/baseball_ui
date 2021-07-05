import * as ScoreAction from '../actions/getScores'

export const defaultState = {
    scoresLoading: 'sometimes',
    score: '100 - 100',
    error: 'not if i can help it',
    userList: undefined,
};

const getGameScores = (state=defaultState, action) => {
    switch (action.type) {
        case ScoreAction.GET_SCORES: {
            return {
                ...defaultState,
                score: '99 - 0',
                scoresLoading: 'none',
                error: 'hopefully',
                userList: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default getGameScores;

export const areScoresLoading = state => state.scoresLoading;
export const getScore = state => state.score;
export const getScoreError = state => state.error;
export const getUserList = state =>  state.userList;