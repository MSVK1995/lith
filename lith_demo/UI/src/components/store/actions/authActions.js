import axios from 'axios';

export const signIn = (credentials) =>{
    return (dispatch, getState) =>{

        axios.get('https://jsonplaceholder.typicode.com/users', {
            params: {
                email: credentials.email,
                username: credentials.password
            }
        },{
            timeout: 5000
        }).then(response =>{
            console.log(response.data)
            if(response.data.length == 1 && response.status==200){
                let user = response.data[0]
                dispatch({type: 'USER_INFO', payload: user})
                dispatch({type: 'LOGIN_SUCCESS'})
                axios.get('https://39c81058-a713-421a-be24-083116160880.mock.pstmn.io/cars').then(response => {
                    let vehicle_list = response.data
                    dispatch({type: 'VEHICLES', payload: vehicle_list})
                }).catch(err =>{
                    console.log("Fetch vehicles failed", err)
                })
                axios.get('https://39c81058-a713-421a-be24-083116160880.mock.pstmn.io/drivers').then(response => {
                    let drivers_list = response.data
                    dispatch({type: 'DRIVERS', payload: drivers_list})
                }).catch(err =>{
                    console.log("Fetch vehicles failed", err)
                })
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