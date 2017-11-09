import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
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
        const payload = {
            name: action.values.nick,
            description: action.values.title
        };
        const response = yield call([org, org.createRepo], payload);
        yield put({type: 'CREATE_PROTOTYPE_SUCCEEDED', response});
    } catch (e) {
        yield put({type: 'CREATE_PROTOTYPE_FAILED', message: e.message});
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest('CREATE_PROTOTYPE_REQUESTED', createPrototype),
        takeEvery('LIST_PROTOTYPES_REQUESTED', listPrototypes)
    ]);
}
