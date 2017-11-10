import { call, put } from 'redux-saga/effects';
import GitHub from 'github-api';
import { listPrototypes, createPrototype } from '.';

describe('sagas', () => {
    const gh = new GitHub({token: '99b65aacd4c3d5e41e1419b056a87bd9811483f2'});
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
                nick: 'Lorem'
            }
        };
        const generator = createPrototype(action);
        const payload = {
            name: action.values.nick,
            description: action.values.title
        };
        const prototype = {};

        expect(generator.next().value).toEqual(call([org, org.createRepo], payload));
        expect(generator.next({data: prototype}).value).toEqual(put({type: 'CREATE_PROTOTYPE_SUCCEEDED', prototype}));
    });
});
