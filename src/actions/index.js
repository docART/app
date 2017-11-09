export const createPrototypeRequested = (title) => ({
    type: 'CREATE_PROTOTYPE_REQUESTED',
    title
});

export const createPrototypeSucceeded = (payload) => ({
    type: 'CREATE_PROTOTYPE_SUCCEEDED',
    payload
});

export const createPrototypeFailed = (message) => ({
    type: 'CREATE_PROTOTYPE_FAILED',
    message
});

export const listPrototypesRequested = () => ({
    type: 'LIST_PROTOTYPES_REQUESTED'
});

export const listPrototypesSucceeded = (items) => ({
    type: 'LIST_PROTOTYPES_SUCCEEDED',
    items
});

export const listPrototypesFailed = (message) => ({
    type: 'LIST_PROTOTYPES_FAILED',
    message
});
