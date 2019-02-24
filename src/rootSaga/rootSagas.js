import { all } from 'redux-saga/effects';
import watchLangSaga from '../managers/languageManager/saga'


export default function* rootSaga() {
    yield all([
        watchLangSaga()
    ])
}