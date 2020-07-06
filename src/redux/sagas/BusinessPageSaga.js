import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* fetchBusiness(action) {
    const id = action.payload
    console.log('in payload', id)
    try {
        const response = yield axios.get(`/select/${id}`);
        yield put({ type: 'SET_BUSINESS', payload: response.data });
    } catch (error) {
        console.log('error getting details', error)
    }
}


function* BusinessSaga() {
    yield takeEvery('FETCH_BUSINESS', fetchBusiness);
}

export default BusinessSaga




// function* businessSaga() {
//     yield takeEvery('FETCH_BUSINESS', fetchBusinessSaga);
// }


// function* fetchBusinessSaga() {
//     try {
//         const response = yield axios.get('/api/businesses');
//         yield put({ type: 'SET_BUSINESS', payload: response.data });
//         console.log('in fetchBusinessSaga', response.data)
//     }
//     catch (error) {
//         console.log('Error in fetchBusinessSaga', error);
//     }
// }

