import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_ERROR,
    SORT_BY_DISTANCE_RATING_REQUEST,
    SORT_BY_DISTANCE_RATING_SUCCESS,
    SORT_BY_DISTANCE_RATING_ERROR,
    SORT_BY_LANGUAGE_REQUEST,
    SORT_BY_LANGUAGE_SUCCESS,
    SORT_BY_LANGUAGE_ERROR,
    CLEAR_SORT_LANGUAGE_REQUEST,
    CLEAR_SORT_LANGUAGE_SUCCESS,
    CLEAR_SORT_LANGUAGE_ERROR,
} from '../actions/index';

const initialState = {
    dataList: [],
    isFetching: false,
    radioRtDistance: 0,
    radioLanguage: 0,
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_DATA_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }

        case GET_DATA_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                dataList: payload,
            };
        }

        case GET_DATA_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: payload,
            };
        }

        case SORT_BY_DISTANCE_RATING_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }

        case SORT_BY_DISTANCE_RATING_SUCCESS: {
            const { _data, payload: _payload } = payload;
            return {
                ...state,
                isFetching: false,
                dataList: _data,
                radioRtDistance: _payload,
            };
        }

        case SORT_BY_DISTANCE_RATING_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: payload,
            };
        }

        case SORT_BY_LANGUAGE_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }

        case SORT_BY_LANGUAGE_SUCCESS: {
            const { _data, payload: _payload } = payload;
            return {
                ...state,
                isFetching: false,
                dataList: _data,
                radioLanguage: _payload,
            };
        }

        case SORT_BY_LANGUAGE_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: payload,
            };
        }

        case CLEAR_SORT_LANGUAGE_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }

        case CLEAR_SORT_LANGUAGE_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                dataList: payload,
                radioLanguage: 0,
                error: null,
            };
        }

        case CLEAR_SORT_LANGUAGE_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: payload,
            };
        }

        default:
            return state;
    }
}
