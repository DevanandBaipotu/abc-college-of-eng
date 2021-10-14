export function reducer(state = {}, actions: any) {
    switch (actions.type) {
        case 'GET_BUYER':
            return {
                ...state,
                Buyers: actions.payload.data,
            }
        case 'GET_INCOME':
            return {
                ...state,
                Income: actions.payload.data
            }
        case 'GET_HIGHLIGHT':
            return {
                ...state,

                Highlights: actions.payload.data
            }
        case 'GET_COUNTRY':
            return {
                ...state,
                Countries: actions.payload.data
            }
        default:
            return state;
    }

}