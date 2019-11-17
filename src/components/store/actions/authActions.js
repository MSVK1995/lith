export const signIn = (credentials) =>{
    return (dispatch, getState) =>{
        if(credentials.email == 'msvk@test.com' && credentials.password=='1234'){
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