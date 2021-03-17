const store = 'app';

export const GET_DATA_REQUEST = `${store}/GET_DATA_REQUEST`;
export const GET_DATA_SUCCESS = `${store}/GET_DATA_SUCCESS`;
export const GET_DATA_ERROR = `${store}/GET_DATA_ERROR`;

export const SORT_BY_DISTANCE_RATING_REQUEST = `${store}/SORT_BY_DISTANCE_RATING_REQUEST`;
export const SORT_BY_DISTANCE_RATING_SUCCESS = `${store}/SORT_BY_DISTANCE_RATING_SUCCESS`;
export const SORT_BY_DISTANCE_RATING_ERROR = `${store}/SORT_BY_DISTANCE_RATING_ERROR`;

export const SORT_BY_LANGUAGE_REQUEST = `${store}/SORT_BY_LANGUAGE_REQUEST`;
export const SORT_BY_LANGUAGE_SUCCESS = `${store}/SORT_BY_LANGUAGE_SUCCESS`;
export const SORT_BY_LANGUAGE_ERROR = `${store}/SORT_BY_LANGUAGE_ERROR`;

export const CLEAR_SORT_LANGUAGE_REQUEST = `${store}/CLEAR_SORT_LANGUAGE_REQUEST`;
export const CLEAR_SORT_LANGUAGE_SUCCESS = `${store}/CLEAR_SORT_LANGUAGE_SUCCESS`;
export const CLEAR_SORT_LANGUAGE_ERROR = `${store}/CLEAR_SORT_LANGUAGE_ERROR`;


export const getData = () => {
    return {
        type: GET_DATA_REQUEST,
    }
}

export const getDataSuccess = (data) => {
    return {
        type: GET_DATA_SUCCESS,
        payload: data
    }
}

export const getDataError = (error) => {
    return {
        type: GET_DATA_ERROR,
        payload: error
    }
}

export const sortByDistanceRating = (payload) => {
    return {
        type: SORT_BY_DISTANCE_RATING_REQUEST,
        payload
    }
}

export const sortByDistanceRatingSuccess = (data) => {
    return {
        type: SORT_BY_DISTANCE_RATING_SUCCESS,
        payload: data
    }
}

export const sortByDistanceRatingError = (error) => {
    return {
        type: SORT_BY_DISTANCE_RATING_ERROR,
        payload: error
    }
}

export const sortByLanguage = (payload) => {
    return {
        type: SORT_BY_LANGUAGE_REQUEST,
        payload
    }
}

export const sortByLanguageSuccess = (data) => {
    return {
        type: SORT_BY_LANGUAGE_SUCCESS,
        payload: data
    }
}

export const sortByLanguageError = (error) => {
    return {
        type: SORT_BY_LANGUAGE_ERROR,
        payload: error
    }
}

export const clearLanguage = () => {
    return {
        type: CLEAR_SORT_LANGUAGE_REQUEST,
    }
}

export const clearLanguageSuccess = (data) => {
    return {
        type: CLEAR_SORT_LANGUAGE_SUCCESS,
        payload: data,
    }
}

export const clearLanguageError = (error) => {
    return {
        type: CLEAR_SORT_LANGUAGE_ERROR,
        payload: error
    }
}