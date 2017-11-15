import * as actions from '.';

describe('actions', () => {
    it('should create action of type CREATE_PROTOTYPE_REQUESTED', () => {
        const values = {};
        const expectedAction = {
            type: 'CREATE_PROTOTYPE_REQUESTED',
            values
        };
        expect(actions.createPrototypeRequested(values)).toEqual(expectedAction);
    });

    it('should create action of type CREATE_PROTOTYPE_SUCCEDEDED', () => {
        const prototype = {};
        const values = {};
        const expectedAction = {
            type: 'CREATE_PROTOTYPE_SUCCEEDED',
            prototype,
            values
        };
        expect(actions.createPrototypeSucceeded(prototype, values)).toEqual(expectedAction);
    });

    it('should create action of type CREATE_PROTOTYPE_FAILED', () => {
        const message = 'failure';
        const expectedAction = {
            type: 'CREATE_PROTOTYPE_FAILED',
            message
        };
        expect(actions.createPrototypeFailed(message)).toEqual(expectedAction);
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

    it('should create action of type FETCH_DOCUMENTS_REQUESTED', () => {
        const prototype = 'test';
        const expectedAction = {
            type: 'FETCH_DOCUMENTS_REQUESTED',
            prototype
        };
        expect(actions.fetchDocumentsRequested(prototype)).toEqual(expectedAction);
    });

    it('should create action of type FETCH_DOCUMENTS_SUCCEEDED', () => {
        const prototype = 'test';
        const documents = {};
        const expectedAction = {
            type: 'FETCH_DOCUMENTS_SUCCEEDED',
            prototype,
            documents
        };
        expect(actions.fetchDocumentsSucceeded(prototype, documents)).toEqual(expectedAction);
    });

    it('should create action of type FETCH_DOCUMENTS_FAILED', () => {
        const prototype = 'test';
        const message = 'failure';
        const expectedAction = {
            type: 'FETCH_DOCUMENTS_FAILED',
            prototype,
            message
        };
        expect(actions.fetchDocumentsFailed(prototype, message)).toEqual(expectedAction);
    });

    it('should create action of type SAVE_DOCUMENT_REQUESTED', () => {
        const prototype = 'test';
        const values = {};
        const expectedAction = {
            type: 'SAVE_DOCUMENT_REQUESTED',
            prototype,
            values
        };
        expect(actions.saveDocumentRequested(prototype, values)).toEqual(expectedAction);
    });

    it('should create action of type SAVE_DOCUMENT_SUCCEEDED', () => {
        const prototype = 'test';
        const expectedAction = {
            type: 'SAVE_DOCUMENT_SUCCEEDED',
            prototype
        };
        expect(actions.saveDocumentSucceeded(prototype)).toEqual(expectedAction);
    });

    it('should create action of type SAVE_DOCUMENT_FAILED', () => {
        const prototype = 'test';
        const message = 'failure';
        const expectedAction = {
            type: 'SAVE_DOCUMENT_FAILED',
            prototype,
            message
        };
        expect(actions.saveDocumentFailed(prototype, message)).toEqual(expectedAction);
    });
});
