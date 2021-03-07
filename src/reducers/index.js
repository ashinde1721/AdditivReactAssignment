import APPLICATION_TYPES from "../types/appTypes";

let initState = {
    results: null,
    employeeName: null,
    noResultFound: false
}

const appReducer = (state = initState, action) => {
    const { type, payload} = action;
    switch(type) {
        case APPLICATION_TYPES.SAVE_RESULTS:
            return {...state, results: payload.results, employeeName: payload.employeeName }
        default:
            break;
    }
    return state;
}

export default appReducer;