import axios from "axios";

export const GET_PITCH_SUMMARY_FOR_PITCHER = "GET_PITCH_SUMMARY_FOR_PITCHER";

export function getPitchesForPitcher(pitcherId) {
    const request_url =
        process.env.REACT_APP_BASEBALL_API_URL + "pitcherSummary";
    const request = axios.get(request_url, {
        params: {
            pitcherId,
        },
    });
    // Getting scores now
    return (dispatch) => {
        request.then(({ data }) => {
            dispatch({
                type: GET_PITCH_SUMMARY_FOR_PITCHER,
                payload: data,
            });
        });
    };
}
