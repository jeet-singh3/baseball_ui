import { combineReducers } from 'redux'
import getScores, * as fromScores from './scores'

export default combineReducers({
    getScores
});

export const getScoresLoading = state => fromScores.areScoresLoading(state.getScores)
export const getMyScore = state => fromScores.getScore(state.getScores)
export const getScoreError = state => fromScores.getScoreError(state.getScores)
export const getMyUserList = state => fromScores.getUserList(state.getScores)