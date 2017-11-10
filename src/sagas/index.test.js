import { call, put } from 'redux-saga/effects';
import GitHub from 'github-api';
import { listPrototypes, createPrototype } from '.';

describe('sagas', () => {
    const gh = new GitHub({token: process.env.REACT_APP_GITHUB_TOKEN});
    const org = gh.getOrganization('docART');

    it('should list prototypes', () => {
        const generator = listPrototypes();
        const items = [];

        expect(generator.next().value).toEqual(call([org, org.getRepos]));
        expect(generator.next({data: []}).value).toEqual(put({type: 'LIST_PROTOTYPES_SUCCEEDED', items}));
    });

    it('should create prototype', () => {
        const action = {
            values: {
                title: 'Lorem ipsum dolor sit',
                nick: 'lorem',
                summary: '',
                motivations: '',
                team: '',
                promoter: '',
                email: '',
                license: ''
            }
        };
        const generator = createPrototype(action);
        const payload = {
            name: action.values.nick,
            description: action.values.title,
            auto_init: true
        };
        const prototype = {name: action.values.nick};
        const repo = gh.getRepo('docART', action.values.nick);
        const content = '#lorem\nLorem ipsum dolor sit\n## Resumen\n\n\n## Motivaciones\n\n\n## Equipo\n\n\n## Promotor\n\n\n## Correo electrónico\n\n\n## Licencia\n\n';
        const message = 'Update README.md';

        expect(generator.next().value).toEqual(call([org, org.createRepo], payload));
        expect(generator.next({data: prototype}).value).toEqual(call([repo, repo.getReadme], 'master', true));
        expect(generator.next({data: '#lorem\nLorem ipsum dolor sit'}).value).toEqual(call([repo, repo.writeFile], 'master', 'README.md', content, message, {}));
        expect(generator.next().value).toEqual(put({type: 'CREATE_PROTOTYPE_SUCCEEDED', prototype}));
    });
});
