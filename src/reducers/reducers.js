import { combineReducers } from "redux";
import getGameScores, * as fromScores from "./scores";
import getPitchersByGame, * as fromPitchersByGame from "./pitchersByGame";

export default combineReducers({
    getGameScores,
    getPitchersByGame,
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

export const getPitchersByGameLoading = (state) =>
    fromPitchersByGame.arePitchersByGameLoading(state.getPitchersByGame);
export const getPitchersByGameIsError = (state) =>
    fromPitchersByGame.getPitchersByGameError(state.getPitchersByGame);
export const getPitchersByGameLister = (state) =>
    fromPitchersByGame.getPitchersByGameList(state.getPitchersByGame);
