import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchList(action) {
    const searchResults = yield axios.get('/search');
    console.log("in fetchList", searchResults);
    console.log("payload", searchResults.data);

    const filteredData = searchResults.data.filter(search => filterSearchResults(search, action.payload))



    yield put({ type: "GET_LIST", payload: filteredData });
}

function* getAll() {
    const allResults = yield axios.get('/search');
    yield put({ type: "GET_ALL", payload: allResults })

}

function filterSearchResults(search, searchWord) {
    if (search.description.search(searchWord) !== -1) {
        return true
    } else if (search.name.search(searchWord) !== -1) {
        return true
    } else if (search.type.search(searchWord) !== -1) {
        return true
    }

    return false
}

function* deleteRestaurant(action) {
    try {
        yield axios.delete(`/search/${action.payload}`)
        yield put({ type: 'FETCH_LIST' })
    } catch (error) {
        console.log(error);
    }
}

function* editRestaurant(action) {
    try {
        yield axios.put(`search/${action.payload.name}`, action.payload)
        yield put({ type: 'FETCH_LIST' })
    } catch (error) {
        console.log('error editing', error);
    }
}

function* searchSaga() {
    yield takeLatest('GET_EVERYTHING', getAll)
    yield takeLatest('FETCH_LIST', fetchList);
    yield takeLatest('DELETE_ITEM', deleteRestaurant);
    yield takeLatest('EDIT_ITEM', editRestaurant);
}

export default searchSaga;