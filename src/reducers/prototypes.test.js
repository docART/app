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
            type: 'LIST_PROTOTYPES_REQUESTED',
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
            type: 'LIST_PROTOTYPES_SUCCEEDED',
            items: {'test/example': {}}
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
            type: 'LIST_PROTOTYPES_FAILED'
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

    it('should handle CREATE_PROTOTYPE_SUCCEEDED', () => {
        const action = {
            type: 'CREATE_PROTOTYPE_SUCCEEDED',
            prototype: 'lorem-ipsum',
            values: {
                title: 'Lorem ipsum dolor sit',
                nick: 'lorem ipsum'
            }
        };
        const initialState = {
            isFetching: false,
            isPosting: true,
            items: {},
            selected: ''
        };
        const expectedState = {
            isFetching: false,
            isPosting: false,
            items: {
                [action.prototype]: action.values
            },
            selected: 'lorem-ipsum'
        };
        expect(prototypes(initialState, action)).toEqual(expectedState);
    });
});
