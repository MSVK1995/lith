let initState = {
    user: {}
}

const userReducer = (state = initState, action) =>{
    switch(action.type){
        case 'USER_INFO':
        return {
            ...state, user_info: action.payload
        }
        break;
        default:
        return state;
    }
}

export default userReducer;