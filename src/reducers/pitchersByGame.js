import * as PitcherInGameAction from "../actions/getPitchersInGame";

export const defaultState = {
    loading: true,
    error: false,
    pitchers: [],
};

const getPitchersByGame = (state = defaultState, action) => {
    switch (action.type) {
        case PitcherInGameAction.GET_PITCHERS_IN_GAME: {
            return {
                ...defaultState,
                loading: false,
                error: false,
                pitchers: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default getPitchersByGame;

export const arePitchersByGameLoading = (state) => state.loading;
export const getPitchersByGameError = (state) => state.error;
export const getPitchersByGameList = (state) => state.pitchers;
