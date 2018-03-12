const initialState = {
    isAuthenticated: true,
    identity: {
        fullName: 'Jane Smith',
        level: 3,
        points: 284,
        rating: 3
    }
};

export default (state = initialState , action) => {
    switch (action.type) {
        case 'AUTH_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                identity: {
                    fullName: 'Jane Smith',
                    level: 3,
                    points: 284,
                    rating: 3
                }
            }
        case 'AUTH_DISPOSE':
            return {
                ...state,
                isAuthenticated: false,
                identity: null
            }
        default:
            return state
    }
}