let initState = {
    user_info: {}
}

const userReducer = (state = initState, action) =>{
    switch(action.type){
        case 'USER_INFO':
        return {
            ...state, user_info: action.payload
        }
        default:
        return {...state};
    }
}

export default userReducer;