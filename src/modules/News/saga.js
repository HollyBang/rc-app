import constants from '../../constants/constants';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions'

export default function* watchNewsSaga() {
    yield takeEvery(constants.GET_NEWS, createRequest),
    yield takeEvery(constants.READ_NEWS, readNews),
    yield takeEvery(constants.CLOSE_NEWS, closeNews)
}

export function* createRequest() {
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

export function* readNews(action) {
    //TODO save to local storage and pay for this news (in case it is opened first time)
    yield put(actions.readNewsStore(action.payload));
}

export function* closeNews(action) {
    yield put(actions.closeNewsStore(action.payload));
}