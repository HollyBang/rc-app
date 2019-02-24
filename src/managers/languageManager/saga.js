import { takeEvery, put, call } from 'redux-saga/effects';
import constants from '../../constants/constants'
import changeLocale from './languageManager';
import * as actions from './actions'


export default function* watchLangSaga() {
    yield takeEvery(constants.CHANGE_LANGUAGE, changeLanguage)
}

function* changeLanguage(action) {
    const payload = yield call(changeLocale, action.payload);

    yield put(actions.changeLanguage(payload));
}

