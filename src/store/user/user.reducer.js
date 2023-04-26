export const USER_ACTION_TYPE = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const INITIAL_STATE = {
    currentUser: null,
}

const userReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case USER_ACTION_TYPE.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}