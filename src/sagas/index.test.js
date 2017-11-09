import { call, put } from 'redux-saga/effects';
import GitHub from 'github-api';
import { listPrototypes, createPrototype } from '.';

describe('sagas', () => {
    const gh = new GitHub({token: '074500ea09c0ef03ae429aa6d203bc8d8963e5d9'});
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

        expect(generator.next().value).toEqual(call([org, org.createRepo], payload));
        expect(generator.next().value).toEqual(put({type: 'CREATE_PROTOTYPE_SUCCEEDED'}));
    });
});
