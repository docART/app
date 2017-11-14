const initialState = {
    isFetching: false,
    isPosting: false,
    items: {}
};

function documents(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DOCUMENTS_REQUESTED':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'FETCH_DOCUMENTS_SUCCEEDED':
            return Object.assign({}, state, {
                isFetching: false,
                items: action.documents
            });
        case 'FETCH_DOCUMENTS_FAILED':
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
}

export default function documentsByProtoype(state = {}, action) {
    switch (action.type) {
        case 'FETCH_DOCUMENTS_REQUESTED':
        case 'FETCH_DOCUMENTS_SUCCEEDED':
        case 'FETCH_DOCUMENTS_FAILED':
            return Object.assign({}, state, {
                [action.prototype]: documents(state[action.prototype], action)
            });
        default:
            return state;
    }
}