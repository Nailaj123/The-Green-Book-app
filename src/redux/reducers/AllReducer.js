const allReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_ALL":
            return action.payload.data;
        default:
            return state;
    }
};

export default allReducer