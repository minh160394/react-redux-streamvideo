const INTIAL_STATE = {
    SignedIn: null,
    userid: null
}
export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {...state, SignedIn: true,
                    userid: action.payload};
        case 'SIGN_OUT':
            return {...state, SignedIn: false,
                    userid: null};
        default:
            return state;
    }
}