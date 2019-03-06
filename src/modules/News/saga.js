import constants from '../../constants/constants';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions'

export default function* watchNewsSaga() {
    yield takeEvery(constants.GET_NEWS, createRequest)
}

// function* getNews(action) {
//     const payload = {};
//     yield put(actions.toggleSettings(payload));
// }

export function* createRequest(action) {
    debugger
    console.log('action GET_NEWS action', action)
    try {
        // yield put({ type: GET_NEWS });
        debugger;
        let response = yield call(fetch, `http://news.finversia.ru/feed/filter/full/?count=20&offset=0&from=1504259520&to=1504259520`);
        debugger;
        const newsList = yield call([response, response.json]);
        console.log(newsList)
        yield put({
            type: GET_NEWS_STORE, payload: {
                newsList,
            }
        });
    } catch (error) {
        console.log('createRequest error', error);
    }
}