import axios from 'axios';

export const signIn = (credentials) =>{
    return (dispatch, getState) =>{

        axios.get('https://jsonplaceholder.typicode.com/users', {
            params: {
                email: credentials.email,
                username: credentials.password
            }
        }).then(response =>{
            console.log(response.data)
            if(response.data.length == 1 && response.status==200){
                let user = response.data[0]
                dispatch({type: 'LOGIN_SUCCESS'})
                dispatch({type: 'USER_INFO', payload: user})
            }
            else{
                dispatch({type: 'LOGIN_FAILED'})
            }
        }).catch(err =>{
            dispatch({type: 'LOGIN_FAILED'})
        })

    }

}

export const signOut = () =>{
    console.log("logout initiated")
    return (dispatch, getState) =>{
        dispatch({type: 'LOGOUT_SUCCESS'})
    }
}