const initialState = {
    isFetching: false,
    items: []
};

function insights(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_INSIGHTS_REQUESTED':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'FETCH_INSIGHTS_SUCCEEDED':
            return Object.assign({}, state, {
                isFetching: false,
                items: action.insights
            });
        case 'FETCH_INSIGHTS_FAILED':
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
}

export default function insightsByPrototype(state = {}, action) {
    switch (action.type) {
        case 'FETCH_INSIGHTS_REQUESTED':
        case 'FETCH_INSIGHTS_SUCCEEDED':
        case 'FETCH_INSIGHTS_FAILED':
            return Object.assign({}, state, {
                [action.prototype]: insights(state[action.prototype], action)
            });
        default:
            return state;
    }
}
