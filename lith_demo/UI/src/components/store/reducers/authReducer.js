
let initState = {
    authStatus: null
}

const authReducer = (state = initState, action) =>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
        return {
            ...state, authStatus: 'success'
        }
        case 'LOGIN_FAILED':
        console.log("Login failed")
        return {
            ...state, authStatus: 'failed'
        }
        case 'LOGOUT_SUCCESS':
        console.log('logging out')
        return {
            ...state, authStatus: 'out'
        };
        default:
        return {...state};
    }
}

export default authReducer;