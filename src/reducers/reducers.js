import { combineReducers } from "redux";
import getGameScores, * as fromScores from "./scores";

export default combineReducers({
    getGameScores,
});

export const getScoresLoading = (state) =>
    fromScores.areScoresLoading(state.getGameScores);
export const getGamesCount = (state) =>
    fromScores.getCount(state.getGameScores);
export const getScoreError = (state) =>
    fromScores.getScoreError(state.getGameScores);
export const getGamesDate = (state) =>
    fromScores.getGamesDate(state.getGameScores);
export const getGames = (state) => fromScores.getGamesList(state.getGameScores);
