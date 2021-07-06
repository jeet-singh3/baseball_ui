import { combineReducers } from "redux";
import getGameScores, * as fromScores from "./scores";
import getPitchersByGame, * as fromPitchersByGame from "./pitchersByGame";
import fetchPlayers, * as fromFetchPlayers from "./playersSearch";
import getPitchesByPitcher, * as fromPitchPitchers from "./pitcherSummary";
import getGamesByPitcher, * as fromGamesPitcher from "./gamesByPitcher";

export default combineReducers({
    getGameScores,
    getPitchersByGame,
    fetchPlayers,
    getPitchesByPitcher,
    getGamesByPitcher,
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

export const getPlayerSearchLoading = (state) =>
    fromFetchPlayers.arePlayersLoading(state.fetchPlayers);
export const getPlayerSearchCount = (state) =>
    fromFetchPlayers.getCount(state.fetchPlayers);
export const getPlayerSearchIsError = (state) =>
    fromFetchPlayers.getPlayersSearchError(state.fetchPlayers);
export const getPlayersSearchList = (state) =>
    fromFetchPlayers.getPlayersList(state.fetchPlayers);

export const getPitchesByPitcherLoading = (state) =>
    fromPitchPitchers.arePitchesByPitcherLoading(state.getPitchesByPitcher);
export const isPitchessByPitcherError = (state) =>
    fromPitchPitchers.getPitchessByPitcherError(state.getPitchesByPitcher);
export const fetchPitchersName = (state) =>
    fromPitchPitchers.getPitchersName(state.getPitchesByPitcher);
export const fetchPitchesByPitcherList = (state) =>
    fromPitchPitchers.getPitchesByPitcherList(state.getPitchesByPitcher);

export const isGamesByPitcherLoading = (state) =>
    fromGamesPitcher.areGamesByPitcherLoading(state.getGamesByPitcher);
export const isGamesByPitcherError = (state) =>
    fromGamesPitcher.getGamesByPitcherError(state.getGamesByPitcher);
export const gamesPitchedByPitcherList = (state) =>
    fromGamesPitcher.getGamesPitchedByPitcher(state.getGamesByPitcher);
