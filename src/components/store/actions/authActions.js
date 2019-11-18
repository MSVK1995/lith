const axios = require('axios');

export const signIn = (credentials) =>{
    return (dispatch, getState) =>{
        let email = credentials.email;
        let username = credentials.password;

        axios.get('https://jsonplaceholder.typicode.com/users', 
                    {
                        params: {
                            email,
                            username
                        }
                    }
        )
        .then( response =>{
            if(response.status == 200 && response.data.length){
                console.log(credentials)
                dispatch({type: 'LOGIN_SUCCESS'})
            }
            else {
                dispatch({type: 'LOGIN_FAILED'})
            }
        }).catch(err =>{
            console.log(err)
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