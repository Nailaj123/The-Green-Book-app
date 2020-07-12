import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* newRestaurant(action) {
    console.log(action.payload)
    try {
        yield axios.post("/form", action.payload);
        console.log('from addrestaurant', action.payload);
        yield put({ type: 'SET_TO_LIST' });
        yield put({ type: 'FETCH_RESTAURANT' })
    } catch (error) {
        console.log(error);
    }
    // }
    // yield put ({
    //     type: 'SET_RESTAURANT', payload: 
    // })
}



function* newRestaurantSaga() {
    yield takeEvery('ADD_TO_LIST', newRestaurant);
    // yield takeEvery('ADD_TO_LIST', newRestaurantAddress);
}


export default newRestaurantSaga;