import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import GitHub from 'github-api';

const gh = new GitHub({token: process.env.REACT_APP_GITHUB_TOKEN});
const org = gh.getOrganization('docART');

export function* listPrototypes() {
    try {
        const response = yield call([org, org.getRepos]);
        const items = response.data.filter((currentValue) => {
            return ['app', 'docs'].indexOf(currentValue.name) < 0;
        });
        const responses = yield all(items.map((currentValue) => {
            let repo = gh.getRepo(currentValue.full_name);
            return call([repo, repo.getContents], 'recipe', 'meta.json', 'true');
        }));
        const prototypes = {};
        items.forEach((currentValue, index) => {
            prototypes[currentValue.name] = responses[index].data;
        });
        yield put({type: 'LIST_PROTOTYPES_SUCCEEDED', items: prototypes});
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
        yield all([
            call([repo, repo.createBranch], 'master', 'recipe'),
            call([repo, repo.createBranch], 'master', 'insights')
        ]);
        yield call([repo, repo.deleteRef], 'heads/master');
        const readme = yield call([repo, repo.getReadme], 'recipe', true);
        const content = readme.data +
                '\n## Resumen\n\n' + action.values.summary +
                '\n## Motivaciones\n\n' + action.values.motivations +
                '\n## Equipo\n\n' + action.values.team +
                '\n## Promotor\n\n' + action.values.promoter +
                '\n## Correo electrónico\n\n' + action.values.email +
                '\n## Licencia\n\n' + action.values.license +
                '\n## Procedimientos\n\n' + action.values.procedure +
                '\n## Cronograma\n\n' + action.values.schedule +
                '\n## Necesidades\n\n' + action.values.requirements +
                '\n## Referencias\n\n' + action.values.references +
                '\n## Logo\n\n![' + action.values.nick + '](' + action.values.logo + ')' +
                '\n## Video\n\n' + action.values.video;
        yield call([repo, repo.writeFile], 'recipe', 'README.md', content, 'Update README.md', {});
        yield call([repo, repo.writeFile], 'recipe', 'meta.json', JSON.stringify(action.values), 'Save values', {});
        yield call([repo, repo.writeFile], 'recipe', 'before.md', '', 'Create document before.md', {});
        yield call([repo, repo.writeFile], 'recipe', 'future.md', '', 'Create document future.md', {});
        yield put({type: 'CREATE_PROTOTYPE_SUCCEEDED', prototype: prototype.data.full_name});
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
