import { call, put } from 'redux-saga/effects';
import GitHub from 'github-api';
import { listPrototypes, createPrototype } from '.';

describe('sagas', () => {
    const gh = new GitHub();
    const org = gh.getOrganization('docART');

    it('should list prototypes', () => {
        const generator = listPrototypes();
        const items = [];

        expect(generator.next().value).toEqual(call(org.getRepos));
        expect(generator.next(items).value).toEqual(put({type: 'LIST_PROTOTYPES_SUCCEEDED', items}));
    });

    it('should create prototype', () => {
        const title = 'Test';
        const generator = createPrototype({title});
        const payload = {};

        expect(generator.next().value).toEqual(call(org.createRepo, {name: title}));
        expect(generator.next(payload).value).toEqual(put({type: 'CREATE_PROTOTYPE_SUCCEEDED', payload}));
    });
});
