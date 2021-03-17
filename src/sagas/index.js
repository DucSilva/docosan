import { put, takeLatest, all } from "redux-saga/effects";
import {
    GET_DATA_REQUEST,
    getDataSuccess,
    getDataError,
    SORT_BY_DISTANCE_RATING_REQUEST,
    sortByDistanceRatingSuccess,
    sortByDistanceRatingError,
    SORT_BY_LANGUAGE_REQUEST,
    sortByLanguageSuccess,
    sortByLanguageError,
    CLEAR_SORT_LANGUAGE_REQUEST,
    clearLanguageSuccess,
    clearLanguageError
} from '../actions/index';
import { sortByDistance, sortByRating, filterItems } from '../utils/functUtil';
import { LANGUAGE_FILTER } from '../utils/ENUM';
import data from '../data.json';

function* getData() {
    try {
        const _data = data?.sort(sortByDistance)
        yield put(getDataSuccess(_data));
    } catch (error) {
        yield put(getDataError(error))
    }
}

function* watchGetData() {
    yield takeLatest(GET_DATA_REQUEST, getData);
}

function* sortByRatingDistance({ payload }) {
    if (payload === 0) {
        try {
            const _data = data?.sort(sortByDistance)
            yield put(sortByDistanceRatingSuccess({ _data, payload }));
        } catch (error) {
            yield put(sortByDistanceRatingError(error))
        }
    } else if (payload === 1) {
        try {
            const _data = data?.sort(sortByRating)
            yield put(sortByDistanceRatingSuccess({ _data, payload }));
        } catch (error) {
            yield put(sortByDistanceRatingError(error))
        }
    }
}

function* watchSortByRatingDistance() {
    yield takeLatest(SORT_BY_DISTANCE_RATING_REQUEST, sortByRatingDistance);
}

function* sortByLanguage({ payload }) {
    switch (payload) {
        case 1: {
            try {
                const _data = data.filter((item) => filterItems(item, LANGUAGE_FILTER[1]));

                yield put(sortByLanguageSuccess({ _data, payload }));
            } catch (error) {
                yield put(sortByLanguageError(error))
            }
            break;
        }
        case 2: {
            try {
                const _data = data.filter((item) => filterItems(item, LANGUAGE_FILTER[2]));
                yield put(sortByLanguageSuccess({ _data, payload }));
            } catch (error) {
                yield put(sortByLanguageError(error))
            }
            break;
        }
        case 3: {
            try {
                const _data = data.filter((item) => filterItems(item, LANGUAGE_FILTER[3]));
                yield put(sortByLanguageSuccess({ _data, payload }));
            } catch (error) {
                yield put(sortByLanguageError(error))
            }
            break;
        }

        default: break;
    }
}

function* watchSortByLanguage() {
    yield takeLatest(SORT_BY_LANGUAGE_REQUEST, sortByLanguage);
}

function* clearSortLanguage() {
    try {
        const _data = data?.sort(sortByDistance)
        yield put(clearLanguageSuccess(_data));
    } catch (error) {
        yield put(clearLanguageError(error))
    }
}

function* watchClearSortLanguage() {
    yield takeLatest(CLEAR_SORT_LANGUAGE_REQUEST, clearSortLanguage);
}

export default function* rootSaga() {
    yield all([
        watchGetData(),
        watchSortByRatingDistance(),
        watchSortByLanguage(),
        watchClearSortLanguage()
    ]);
}
