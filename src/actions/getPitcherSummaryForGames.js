import axios from "axios";

export const GET_PITCHER_SUMMARY_FOR_GAMES = "GET_PITCHER_SUMMARY_FOR_GAMES";

export function getGamesForPitcher(pitcherId) {
    const request_url =
        process.env.REACT_APP_BASEBALL_API_URL + "pitcherGameSummary";
    const request = axios.get(request_url, {
        params: {
            pitcherId,
        },
    });
    // Getting scores now
    return (dispatch) => {
        request.then(({ data }) => {
            dispatch({
                type: GET_PITCHER_SUMMARY_FOR_GAMES,
                payload: data,
            });
        });
    };
}
