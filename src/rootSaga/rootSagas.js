import { all } from 'redux-saga/effects';
import watchLangSaga from '../managers/languageManager/saga'
import watchNewsSaga from '../modules/News/saga';


export default function* rootSaga() {
    yield all([
        watchLangSaga(),
        watchNewsSaga()
    ])
}