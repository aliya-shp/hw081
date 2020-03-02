import axiosApi from "../../axiosApi";

export const SHORTEN_LINK_REQUEST = 'SHORTEN_LINK_REQUEST';
export const SHORTEN_LINK_SUCCESS = 'SHORTEN_LINK_SUCCESS';
export const SHORTEN_LINK_FAILURE = 'SHORTEN_LINK_FAILURE';

export const shortenLinkRequest = () => ({type: SHORTEN_LINK_REQUEST});
export const shortenLinkSuccess = link => ({type: SHORTEN_LINK_SUCCESS, link});
export const shortenLinkFailure = error => ({type: SHORTEN_LINK_FAILURE, error});

export const shortenLink = link => {
    return async dispatch => {
        dispatch(shortenLinkRequest());

        try {
            const response = await axiosApi.post('/links', link);
            dispatch(shortenLinkSuccess(response.data));
        } catch (error) {
            dispatch(shortenLinkFailure(error));
        }
    }
};