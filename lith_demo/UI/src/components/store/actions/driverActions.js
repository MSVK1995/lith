import axios from 'axios';

export const addDriver=(data)=>{
    return{
        type : "ADDADRIVER",
        data
    }
}

export function adddriverdata(data){
   // console.log(data);
    return dispatch =>{
         /*axios.post('http://localhost:8080/api/users', data).then(respose=>{
             dispatch(addDriver(respose))
         }).catch(err=>{
             console.log(err);
             //dispatch(addDriver({}))
         });*/

         dispatch(addDriver(data));
         return true
    }
}

const updateData=(data)=>{
    //console.log('updateData');
    return{
        type : "UPDATEDRIVER",
        data
    }
}

export function updateDriver(data){
    //console.log('updateDriver');
    return dispatch=>{
        dispatch(updateData(data))
        return true
    }
} 

const deleteData=(id)=>{
    return{
        type : "DELETEDATA",
        id
    }
}

export function removeDriver(id){
    return dispatch=>{
        dispatch(deleteData(id))
    }
}

export function updateDriverShiftStatus(shiftStatus,id,actionName){
    return dispatch=>{
        dispatch({type : 'UPDATE_DRIVER',shiftStatus,id,actionName})
    }
}