import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* BusinessSaga(action) {
    try {
        yield axios.post("/api/AddBusiness", action.payload);
        console.log('from AddBusiness', action.payload);
        yield put({ type: 'FETCH_BUSINESS' })
    } catch (error) {
        console.log('Error in AddBusiness', error);
    }
}


function* AddBusinessSaga() {
    yield takeEvery('ADD_TO_LIST', AddBusinessSaga);
    // yield takeEvery('ADD_TO_LIST', newBusinessAddress);
}

export default AddBusinessSaga;