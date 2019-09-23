const initialState = {
    number: 100,
    data: [],
    results: [],
    isLoading: false,
}

export default books = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BOOKS_PENDING':
            return {
                isLoading: true
            }
        case 'GET_BOOKS_REJECTED':
            return {
                isLoading: false
            }
        case 'GET_NOTES_FULFILLED':
            return {
                isLoading: false,
                data: action.payload.data.results
            }
        default:
            return state;
    }

}