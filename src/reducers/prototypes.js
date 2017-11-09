const initialState = {
    isFetching: false,
    items: []
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
        default:
            return state;
    }
};
