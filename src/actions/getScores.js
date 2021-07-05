import axios from 'axios'

export const GET_SCORES = 'GET_SCORES'

export function getScores() {

    const request = axios.get('https://jsonplaceholder.typicode.com/posts');
    // Getting scores now
    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: GET_SCORES,
                payload: data
            })
        })
    };
}