import documents from './documents';

describe('documents reducer', () => {
    it('should return initial state', () => {
        const expectedState = {};
        expect(documents(undefined, {})).toEqual(expectedState);
    });

    it('should handle FETCH_DOCUMENTS_REQUESTED', () => {
        const action = {
            type: 'FETCH_DOCUMENTS_REQUESTED',
            prototype: 'test'
        };
        const initialState = {
            test: {
                isFetching: false,
                isPosting: false,
                items: {}
            }
        };
        const expectedState = {
            test: {
                isFetching: true,
                isPosting: false,
                items: {}
            }
        };
        expect(documents(initialState, action)).toEqual(expectedState);
    });

    it('should handle FETCH_DOCUMENTS_SUCCEEDED', () => {
        const action = {
            type: 'FETCH_DOCUMENTS_SUCCEEDED',
            prototype: 'test',
            documents: {'test/example': {}}
        };
        const initialState = {
            test: {
                isFetching: true,
                isPosting: false,
                items: {}
            }
        };
        const expectedState = {
            test: {
                isFetching: false,
                isPosting: false,
                items: {'test/example': {}}
            }
        };
        expect(documents(initialState, action)).toEqual(expectedState);
    });

    it('should handle FETCH_DOCUMENTS_FAILED', () => {
        const action = {
            type: 'FETCH_DOCUMENTS_FAILED',
            prototype: 'test'
        };
        const initialState = {
            test: {
                isFetching: true,
                isPosting: false,
                items: {}
            }
        };
        const expectedState = {
            test: {
                isFetching: false,
                isPosting: false,
                items: {}
            }
        };
        expect(documents(initialState, action)).toEqual(expectedState);
    });

    it('should handle SAVE_DOCUMENT_REQUESTED', () => {
        const action = {
            type: 'SAVE_DOCUMENT_REQUESTED',
            prototype: 'test',
            values: {}
        };
        const initialState = {
            test: {
                isFetching: false,
                isPosting: false,
                items: {}
            }
        };
        const expectedState = {
            test: {
                isFetching: false,
                isPosting: true,
                items: {}
            }
        };
        expect(documents(initialState, action)).toEqual(expectedState);
    });

    it('should handle SAVE_DOCUMENT_SUCCEEDED', () => {
        const action = {
            type: 'SAVE_DOCUMENT_SUCCEEDED',
            prototype: 'test'
        };
        const initialState = {
            test: {
                isFetching: false,
                isPosting: true,
                items: {}
            }
        };
        const expectedState = {
            test: {
                isFetching: false,
                isPosting: false,
                items: {}
            }
        };
        expect(documents(initialState, action)).toEqual(expectedState);
    });

    it('should handle SAVE_DOCUMENT_FAILED', () => {
        const action = {
            type: 'SAVE_DOCUMENT_FAILED',
            prototype: 'test',
            message: 'failure'
        };
        const initialState = {
            test: {
                isFetching: false,
                isPosting: true,
                items: {}
            }
        };
        const expectedState = {
            test: {
                isFetching: false,
                isPosting: false,
                items: {}
            }
        };
        expect(documents(initialState, action)).toEqual(expectedState);
    });
});
