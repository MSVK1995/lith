let initialState={
    
    driverList :[]
}
// Sincere@april.biz email
// Bret
const driversReducer=(state=initialState,action)=>{
    let newState = JSON.parse(JSON.stringify(state));
    //console.log(driverlist);
    switch(action.type){
        case 'DRIVERS':
            return {
                ...state, driverList: action.payload
            }
        case 'ADDADRIVER' :
        let newdriverList = state.driverList.concat([action.data])
      //  console.log(newState)
      newState.driverList = newdriverList
        return newState
        case 'UPDATEDRIVER' :
            let getId =  action.data.id;
            let { driverList } = newState;
            let getIndex = getIndexfunc(state.driverList,getId);
            driverList.splice(getIndex,1,action.data);
           // newState.driverList = updatelist
           //state = newState
           //console.log(newState.driverList);
            return newState
        case 'DELETEDATA' : 
        let  newList = state.driverList.filter((list)=>list.userid!=action.id)  
        newState.driverList = newList
        return newState
        case 'UPDATE_DRIVER' :
            let updatelist=state.driverList.filter((list)=>list.id===action.id)
            if(action.actionName==='driverStatus'){
                updatelist[0].driverStatus=action.shiftStatus
            }else{
                updatelist[0].shiftid=action.shiftStatus
            }
            let getmyIndex = state.driverList.findIndex((list)=>{
                return list.id===action.id;
            })
            let newDriverList = [...state.driverList];
            newDriverList.splice(getmyIndex,1,updatelist[0])
            newState.driverList= newDriverList;
            //console.log(updatelist);
            return newState
        default :
        return state
    }

}   

function getIndexfunc(state,getId){
    let index;
    for(let i=0; i < state.length; i++){
        if(state[i].id==getId){
            index=i
        }
    }
    return index
}

export default driversReducer