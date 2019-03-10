import constants from '../../constants/constants';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions'

export default function* watchNewsSaga() {
    yield takeEvery(constants.GET_NEWS, createRequest)
}

export function* createRequest(action) {
    try {
        // let response = yield call(fetch, `http://news.finversia.ru/feed/filter/full/?count=20&offset=0&from=0&to=1504259520`);
        let response = yield call(fetch, `http://news.finversia.ru/feed/filter/full/?count=10&offset=0`);
        const newsList = yield call([response, response.json]);
        console.log(newsList);
        yield put(actions.getNewsStore(newsList));
    } catch (error) {
        console.log('createRequest error', error);
    }
}