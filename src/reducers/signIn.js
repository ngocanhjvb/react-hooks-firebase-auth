const initState = {
    user: {}
}


const user = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state

    }
}

export default user;
