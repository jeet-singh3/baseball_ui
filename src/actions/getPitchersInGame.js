import axios from "axios";

export const GET_PITCHERS_IN_GAME = "GET_PITCHERS_IN_GAME";

export function getPitchersInGame(gameId = "2021-05-11") {
    const request_url =
        process.env.REACT_APP_BASEBALL_API_URL + "individualGameSummary";
    const request = axios.get(request_url, {
        params: {
            gameId,
        },
    });
    return (dispatch) => {
        request.then(({ data }) => {
            dispatch({
                type: GET_PITCHERS_IN_GAME,
                payload: data,
            });
        });
    };
}
