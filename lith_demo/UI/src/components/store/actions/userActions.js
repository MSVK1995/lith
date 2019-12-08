


export const getVehicle = (vehicle_id) =>{
    return (dispatch, getState) =>{
        dispatch({type: "GET_CAR", id: vehicle_id})
    }
}

export const updateVehicleStatus = (updated_obj) =>{
    return (dispatch, getState) =>{
        dispatch({type:"UPDATE_CAR_STATUS", car:updated_obj})
    }
}