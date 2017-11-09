import { all, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import GitHub from 'github-api';

const gh = new GitHub({token: '074500ea09c0ef03ae429aa6d203bc8d8963e5d9'});
const org = gh.getOrganization('docART');

export function* listPrototypes() {
    try {
        const response = yield call([org, org.getRepos]);
        yield put({type: 'LIST_PROTOTYPES_SUCCEEDED', items: response.data});
    } catch (e) {
        yield put({type: 'LIST_PROTOTYPES_FAILED', message: e.message});
    }
}

export function* createPrototype(action) {
    try {
        const payload = yield call([org, org.createRepo], {name: action.title});
        yield put({type: 'CREATE_PROTOTYPE_SUCCEEDED', payload});
    } catch (e) {
        yield put({type: 'CREATE_PROTOTYPE_FAILED', message: e.message});
    }
}

export function* logger(action) {
    const state = yield select();

    console.log('action', action);
    console.log('state after', state);
}

export default function* rootSaga() {
    console.log('hello');
    yield all([
        takeEvery('*', logger),
        takeEvery('LIST_PROTOTYPES_REQUESTED', listPrototypes)
    ]);
}
