import prototypes from './prototypes';

describe('prototypes reducer', () => {
    it('should return initial state', () => {
        const expectedState = {
            isFetching: false,
            items: []
        };
        expect(prototypes(undefined, {})).toEqual(expectedState);
    });

    it('should handle LIST_PROTOTYPES_REQUESTED', () => {
        const action = {
            'type': 'LIST_PROTOTYPES_REQUESTED',
        };
        const expectedState = {
            isFetching: true,
            items: []
        };
        expect(prototypes(undefined, action)).toEqual(expectedState);
    });

    it('should handle LIST_PROTOTYPES_SUCCEEDED', () => {
        const action = {
            'type': 'LIST_PROTOTYPES_SUCCEEDED',
            'items': [{}]
        };
        const expectedState = {
            isFetching: false,
            items: [{}]
        };
        expect(prototypes(undefined, action)).toEqual(expectedState);
    });

    it('should handle LIST_PROTOTYPES_FAILED', () => {
        const action = {
            'type': 'LIST_PROTOTYPES_FAILED'
        };
        const initialState = {
            isFetching: true,
            items: []
        };
        const expectedState = {
            isFetching: false,
            items: []
        };
        expect(prototypes(initialState, action)).toEqual(expectedState);
    });
});