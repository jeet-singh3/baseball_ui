import axios from "axios";

export const GET_SCORES = "GET_SCORES";

export function getScores(gameDate = "2021-05-11") {
    const request_url = process.env.REACT_APP_BASEBALL_API_URL + "games";
    const request = axios.get(request_url, {
        params: {
            gameDate,
        },
    });
    // Getting scores now
    return (dispatch) => {
        request.then(({ data }) => {
            dispatch({
                type: GET_SCORES,
                payload: data,
            });
        });
    };
}
