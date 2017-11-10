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
            description: action.values.title,
            auto_init: true
        };
        const prototype = yield call([org, org.createRepo], payload);
        const repo = gh.getRepo('docART', prototype.data.name);
        const readme = yield call([repo, repo.getReadme], 'master', true);
        const content = readme.data +
                '\n## Resumen\n\n' + action.values.summary +
                '\n## Motivaciones\n\n' + action.values.motivations +
                '\n## Equipo\n\n' + action.values.team +
                '\n## Promotor\n\n' + action.values.promoter +
                '\n## Correo electrónico\n\n' + action.values.email +
                '\n## Licencia\n\n' + action.values.license;
        const message = 'Update README.md';
        const response = yield call([repo, repo.writeFile], 'master', 'README.md', content, message, {});
        yield put({type: 'CREATE_PROTOTYPE_SUCCEEDED', prototype: prototype.data});
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
