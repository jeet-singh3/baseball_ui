import * as PitcherSummaryAction from "../actions/getPitchSummaryForPitcher";

export const defaultState = {
    loading: true,
    error: false,
    name: "",
    pitches: [],
};

const getPitchesByPitcher = (state = defaultState, action) => {
    switch (action.type) {
        case PitcherSummaryAction.GET_PITCH_SUMMARY_FOR_PITCHER: {
            return {
                ...defaultState,
                loading: false,
                error: false,
                name: action.payload.name,
                pitches: action.payload.pitches_summary,
            };
        }
        default: {
            return state;
        }
    }
};

export default getPitchesByPitcher;

export const arePitchesByPitcherLoading = (state) => state.loading;
export const getPitchessByPitcherError = (state) => state.error;
export const getPitchersName = (state) => state.name;
export const getPitchesByPitcherList = (state) => state.pitches;
