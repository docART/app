export const createPrototypeRequested = (values) => ({
    type: 'CREATE_PROTOTYPE_REQUESTED',
    values
});

export const createPrototypeSucceeded = (prototype, values) => ({
    type: 'CREATE_PROTOTYPE_SUCCEEDED',
    prototype,
    values
});

export const createPrototypeFailed = (message) => ({
    type: 'CREATE_PROTOTYPE_FAILED',
    message
});

export const updatePrototypeRequested = (prototype, values) => ({
    type: 'UPDATE_PROTOTYPE_REQUESTED',
    prototype,
    values
});

export const updatePrototypeSucceeded = (prototype, values) => ({
    type: 'UPDATE_PROTOTYPE_SUCCEEDED',
    prototype,
    values
});

export const updatePrototypeFailed = (prototype, message) => ({
    type: 'UPDATE_PROTOTYPE_FAILED',
    prototype,
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

export const fetchDocumentsRequested = (prototype) => ({
    type: 'FETCH_DOCUMENTS_REQUESTED',
    prototype
});

export const fetchDocumentsSucceeded = (prototype, documents) => ({
    type: 'FETCH_DOCUMENTS_SUCCEEDED',
    prototype,
    documents
});

export const fetchDocumentsFailed = (prototype, message) => ({
    type: 'FETCH_DOCUMENTS_FAILED',
    prototype,
    message
});

export const saveDocumentRequested = (prototype, values) => ({
    type: 'SAVE_DOCUMENT_REQUESTED',
    prototype,
    values
});

export const saveDocumentSucceeded = (prototype) => ({
    type: 'SAVE_DOCUMENT_SUCCEEDED',
    prototype
});

export const saveDocumentFailed = (prototype, message) => ({
    type: 'SAVE_DOCUMENT_FAILED',
    prototype,
    message
});

export const fetchInsightsRequested = (prototype) => ({
    type: 'FETCH_INSIGHTS_REQUESTED',
    prototype
});

export const fetchInsightsSucceeded = (prototype, insights) => ({
    type: 'FETCH_INSIGHTS_SUCCEEDED',
    prototype,
    insights
});

export const fetchInsightsFailed = (prototype, message) => ({
    type: 'FETCH_INSIGHTS_FAILED',
    prototype,
    message
});
