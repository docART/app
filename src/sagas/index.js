import {push} from 'react-router-redux';
import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import GitHub from 'github-api';
import * as actions from '../actions';

const gh = new GitHub({token: process.env.REACT_APP_GITHUB_TOKEN});
const org = gh.getOrganization('docART');

export function* listPrototypes() {
    try {
        const response = yield call([org, org.getRepos]);
        const items = response.data.filter((currentValue) => {
            return ['app', 'documentacion'].indexOf(currentValue.name) < 0;
        });
        const responses = yield all(items.map((currentValue) => {
            let repo = gh.getRepo(currentValue.full_name);
            return call([repo, repo.getContents], 'recipe', 'meta.json', 'true');
        }));
        const prototypes = {};
        items.forEach((currentValue, index) => {
            prototypes[currentValue.name] = responses[index].data;
        });
        yield put(actions.listPrototypesSucceeded(prototypes));
    } catch (e) {
        yield put(actions.listPrototypesFailed(e.message));
    }
}

export function* fetchDocuments(action) {
    const repo = gh.getRepo('docART', action.prototype);

    try {
        const responses = yield all([
            call([repo, repo.getContents], 'recipe', ''),
            call([repo, repo.getContents], 'recipe', 'departure'),
            call([repo, repo.getContents], 'recipe', 'prototyping'),
            call([repo, repo.getContents], 'recipe', 'future')
        ]);
        const requests = [];
        responses.forEach((response) => {
            response.data.forEach((content) => {
                if (content.type === 'file') {
                    requests.push(call([repo, repo.getContents], 'recipe', content.path, true));
                }
            });
        });
        const contents = yield all(requests);
        const documents = {};
        const start = (repo.__apiBase + '/repos/docART/' + action.prototype + '/contents/').length;
        contents.forEach((currentValue) => {
            documents[currentValue.config.url.substr(start)] = currentValue.data;
        });
        yield put(actions.fetchDocumentsSucceeded(action.prototype, documents));
    }
    catch (e) {
        yield put(actions.fetchDocumentsFailed(action.prototype, e.message));
    }
}

export function* saveDocument(action) {
    const repo = gh.getRepo('docART', action.prototype);
    const {prototype, section, path, insight, ...content} = action.values;
    var message;

    if (insight) {
        message = insight.title + '\n\n' + insight.other;
    } else {
        message = 'Update ' + section;
    }

    try {
        yield call([repo, repo.writeFile], 'recipe', path, JSON.stringify(content), message, {});
        yield put(actions.saveDocumentSucceeded(action.prototype));
        yield put(push('/prototypes/' + action.prototype + '/long'));
    } catch (e) {
        yield put(actions.saveDocumentFailed(action.prototype, e.message));
    }
}

export function* fetchInsights(action) {
    const repo = gh.getRepo('docART', action.prototype);

    try {
        const response = yield call([repo, repo.listCommits], {sha: 'recipe'});
        yield put(actions.fetchInsightsSucceeded(action.prototype, response.data));
    }
    catch (e) {
        yield put(actions.fetchInsightsFailed(action.prototype, e.message));
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
        yield call([repo, repo.writeFile], 'recipe', 'departure/README.md', '# Antes', 'Create README.md for departure', {});
        yield call([repo, repo.writeFile], 'recipe', 'prototyping/README.md', '# Durante', 'Create README.md for prototyping', {});
        yield call([repo, repo.writeFile], 'recipe', 'future/README.md', '# Despues', 'Create README.md for future', {});
        yield put(actions.createPrototypeSucceeded(prototype.data.full_name, action.values));
        yield put(push('/'));
    } catch (e) {
        yield put(actions.createPrototypeFailed(e.message));
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest('CREATE_PROTOTYPE_REQUESTED', createPrototype),
        takeEvery('LIST_PROTOTYPES_REQUESTED', listPrototypes),
        takeEvery('FETCH_DOCUMENTS_REQUESTED', fetchDocuments),
        takeEvery('SAVE_DOCUMENT_REQUESTED', saveDocument),
        takeEvery('FETCH_INSIGHTS_REQUESTED', fetchInsights)
    ]);
}
