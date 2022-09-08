const initialState = {
    isAuthenticated: false
};

const authReducer = (state, action) => {
    switch (action.type) {
        case "SET_AUTH":
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};

export { authReducer, initialState };
