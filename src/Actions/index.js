// { type: 'GETTING_DATA' }
export function actionLoad (type) {
    return {
        type:type,
    };
}

// { type: 'RECEIVED_DATA', payload: { data: JSON } }
export function actionReceived (type, data) {
    return {
        type: type,
        payload: data,
    };
}

// { type: 'RECEIVED_ERROR', payload: { err: String } }
export function actionError (type, err) {
    return {
        type: type,
        payload: {
            err,
        },
    };
}