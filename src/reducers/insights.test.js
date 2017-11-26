import insights from './insights';

describe('insights reducer', () => {
    it('should return initial state', () => {
        const expectedState = {};
        expect(insights(undefined, {})).toEqual(expectedState);
    });

    it('should handle FETCH_INSIGHTS_REQUESTED', () => {
        const action = {
            type: 'FETCH_INSIGHTS_REQUESTED',
            prototype: 'test'
        };
        const initialState = {
            test: {
                isFetching: false,
                items: []
            }
        };
        const expectedState = {
            test: {
                isFetching: true,
                items: []
            }
        };
        expect(insights(initialState, action)).toEqual(expectedState);
    });

    it('should handle FETCH_INSIGHTS_SUCCEEDED', () => {
        const action = {
            type: 'FETCH_INSIGHTS_SUCCEEDED',
            prototype: 'test',
            insights: []
        };
        const initialState = {
            test: {
                isFetching: true,
                items: []
            }
        };
        const expectedState = {
            test: {
                isFetching: false,
                items: []
            }
        };
        expect(insights(initialState, action)).toEqual(expectedState);
    });

    it('should handle FETCH_INSIGHTS_FAILED', () => {
        const action = {
            type: 'FETCH_INSIGHTS_FAILED',
            prototype: 'test'
        };
        const initialState = {
            test: {
                isFetching: true,
                items: []
            }
        };
        const expectedState = {
            test: {
                isFetching: false,
                items: []
            }
        };
        expect(insights(initialState, action)).toEqual(expectedState);
    });
});
