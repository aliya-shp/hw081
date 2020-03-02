import {SHORTEN_LINK_FAILURE, SHORTEN_LINK_REQUEST, SHORTEN_LINK_SUCCESS} from "../actions/linksActions";

const initialState = {
    shortUrl: '',
    error: null,
};

const linksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHORTEN_LINK_REQUEST:
            return {
                ...state,
                error: null
            };
        case SHORTEN_LINK_SUCCESS:
            return {
                ...state,
                shortUrl: action.shortUrl
            };
        case SHORTEN_LINK_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};

export default linksReducer;