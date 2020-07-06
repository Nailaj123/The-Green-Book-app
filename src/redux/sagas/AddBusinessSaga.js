import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* AddBusinessSaga(action) {
    try {
        yield axios.post("/form", action.payload);
        console.log('from AddBusiness', action.payload);
        yield put({ type: 'FETCH_BUSINESS' })
    } catch (error) {
        console.log('Error in AddBusiness', error);
    }
}


function* BusinessSaga() {
    yield takeEvery('ADD_TO_LIST', AddBusinessSaga);
    // yield takeEvery('ADD_TO_LIST', newBusinessAddress);
}

export default BusinessSaga;