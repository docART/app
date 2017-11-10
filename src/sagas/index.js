import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import GitHub from 'github-api';

const gh = new GitHub({token: process.env.REACT_APP_GITHUB_TOKEN});
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
        yield put({type: 'CREATE_PROTOTYPE_SUCCEEDED', prototype: response.data});
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
