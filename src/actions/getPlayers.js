import axios from "axios";

export const GET_PLAYERS = "GET_PLAYERS";

export function getPlayers(firstName = "Max", lastName = "Scherzer") {
    const request_url = process.env.REACT_APP_BASEBALL_API_URL + "players";
    const request = axios.get(request_url, {
        params: {
            firstName,
            lastName,
        },
    });
    // Getting scores now
    return (dispatch) => {
        request.then(({ data }) => {
            dispatch({
                type: GET_PLAYERS,
                payload: data,
            });
        });
    };
}
