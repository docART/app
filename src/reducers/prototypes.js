const initialState = {
    isFetching: false,
    isPosting: false,
    items: {},
    selected: ''
};

export default function prototypes(state = initialState, action) {
    switch (action.type) {
        case 'LIST_PROTOTYPES_REQUESTED':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'LIST_PROTOTYPES_SUCCEEDED':
            return Object.assign({}, state, {
                isFetching: false,
                items: action.items
            });
        case 'LIST_PROTOTYPES_FAILED':
            return Object.assign({}, state, {
                isFetching: false
            });
        case 'CREATE_PROTOTYPE_REQUESTED':
            return Object.assign({}, state, {
                isPosting: true
            });
        case 'CREATE_PROTOTYPE_SUCCEEDED':
            return Object.assign({}, state, {
                isPosting: false,
                selected: action.prototype,
                items: Object.assign({}, state.items, {[action.prototype]: action.values})
            });
        case 'CREATE_PROTOTYPE_FAILED':
            return Object.assign({}, state, {
                isPosting: false
            });
        default:
            return state;
    }
};
