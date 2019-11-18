export const signIn = (credentials) =>{
    return (dispatch, getState) =>{
        if(credentials.email == 'admin@test.com' && credentials.password=='admin@1234'){
            console.log(credentials)
            dispatch({type: 'LOGIN_SUCCESS'})
        }
        else{
            dispatch({type: 'LOGIN_FAILED'})
        }
    }

}

export const signOut = () =>{
    console.log("logout initiated")
    return (dispatch, getState) =>{
        dispatch({type: 'LOGOUT_SUCCESS'})
    }
}