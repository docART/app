import * as actions from '.';

describe('actions', () => {
    it('should create action of type CREATE_PROTOTYPE_REQUESTED', () => {
        const values = [];
        const expectedAction = {
            type: 'CREATE_PROTOTYPE_REQUESTED',
            values
        };
        expect(actions.createPrototypeRequested(values)).toEqual(expectedAction)
    });

    it('should create action of type CREATE_PROTOTYPE_SUCCEDEDED', () => {
        const payload = {};
        const expectedAction = {
            type: 'CREATE_PROTOTYPE_SUCCEEDED',
            payload
        };
        expect(actions.createPrototypeSucceeded(payload)).toEqual(expectedAction)
    });

    it('should create action of type CREATE_PROTOTYPE_FAILED', () => {
        const message = 'failure';
        const expectedAction = {
            type: 'CREATE_PROTOTYPE_FAILED',
            message
        };
        expect(actions.createPrototypeFailed(message)).toEqual(expectedAction)
    });

    it('should create action of type LIST_PROTOTYPES_REQUESTED', () => {
        const expectedAction = {
            type: 'LIST_PROTOTYPES_REQUESTED',
        };
        expect(actions.listPrototypesRequested()).toEqual(expectedAction)
    });

    it('should create action of type LIST_PROTOTYPES_SUCCEDEDED', () => {
        const items = [];
        const expectedAction = {
            type: 'LIST_PROTOTYPES_SUCCEEDED',
            items
        };
        expect(actions.listPrototypesSucceeded(items)).toEqual(expectedAction)
    });

    it('should create action of type LIST_PROTOTYPES_FAILED', () => {
        const message = 'failure';
        const expectedAction = {
            type: 'LIST_PROTOTYPES_FAILED',
            message
        };
        expect(actions.listPrototypesFailed(message)).toEqual(expectedAction)
    });
});
