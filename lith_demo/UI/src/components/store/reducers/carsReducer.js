let initState = {
    vehicles: []
}

const carsReducer = (state=initState, action) =>{
    switch(action.type){
        case 'VEHICLES':
        return {
            ...state, vehicles: action.payload
        }
        case 'UPDATE_CAR_STATUS':
        let vehs = [...state.vehicles]
        let foundIndex = vehs.findIndex(car_item => car_item.id === action.car.id)
        vehs[foundIndex] = action.car
        return {
            ...state, vehicles: vehs
        }
        default:
        return {...state};
    }
}

export default carsReducer;