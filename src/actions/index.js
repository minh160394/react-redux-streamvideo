import stream from "../apis/stream"
import history from "../history";
import {
    CREATE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    LIST_STREAM,
    SINGLE_STREAM
} from "./type";

export const signIn = (userid) => {
    return {
        type: 'SIGN_IN',
        payload: userid
    };
};
export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const createStream = formValue => async (dispatch, getState) => {
    const { userid } = getState().auth;
    const response = await stream.post('/stream',{...formValue, userid});
    dispatch ({type: CREATE_STREAM, payload: response.data});
    history.push('/');
}

export const fetchStreams = () => async dispatch => {
    const response = await stream.get('/stream');
    dispatch ({type: LIST_STREAM, payload: response.data});
}

export const fetchStream = (id) => async dispatch => {
    const response = await stream.get(`/stream/${id}`);
    dispatch ({type: SINGLE_STREAM, payload: response.data});
}
export const editStream = (id, formValue) => async dispatch => {
    const response = await stream.patch(`/stream/${id}`, formValue);
    dispatch ({type: EDIT_STREAM, payload: response.data});
    history.push('/');
}
export const deleteStream = (id) => async dispatch => {
   await stream.delete(`/stream/${id}`);
    dispatch ({type: DELETE_STREAM, payload: id});
    history.push('/YourStream');
}