import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* businessSaga() {
    yield takeEvery('FETCH_BUSINESS', fetchBusinessSaga);
}


function* fetchBusinessSaga() {
    try {
        const response = yield axios.get('/api/businesses');
        yield put({ type: 'SET_BUSINESS', payload: response.data });
        console.log('in fetchBusinessSaga', response.data)
    }
    catch (error) {
        console.log('Error in fetchBusinessSaga', error);
    }
}




export default businessSaga;