import prototypes from './prototypes';

describe('prototypes reducer', () => {
    it('should return initial state', () => {
        const expectedState = {
            isFetching: false,
            isPosting: false,
            items: {},
            selected: ''
        };
        expect(prototypes(undefined, {})).toEqual(expectedState);
    });

    it('should handle LIST_PROTOTYPES_REQUESTED', () => {
        const action = {
            'type': 'LIST_PROTOTYPES_REQUESTED',
        };
        const expectedState = {
            isFetching: true,
            isPosting: false,
            items: {},
            selected: ''
        };
        expect(prototypes(undefined, action)).toEqual(expectedState);
    });

    it('should handle LIST_PROTOTYPES_SUCCEEDED', () => {
        const action = {
            'type': 'LIST_PROTOTYPES_SUCCEEDED',
            'items': {'test/example': {}}
        };
        const expectedState = {
            isFetching: false,
            isPosting: false,
            items: {'test/example': {}},
            selected: ''
        };
        expect(prototypes(undefined, action)).toEqual(expectedState);
    });

    it('should handle LIST_PROTOTYPES_FAILED', () => {
        const action = {
            'type': 'LIST_PROTOTYPES_FAILED'
        };
        const initialState = {
            isFetching: true,
            isPosting: false,
            items: {},
            selected: ''
        };
        const expectedState = {
            isFetching: false,
            isPosting: false,
            items: {},
            selected: ''
        };
        expect(prototypes(initialState, action)).toEqual(expectedState);
    });
});