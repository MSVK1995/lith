import React from 'react';
import { connect } from 'react-redux';

import BarChart from '../../assets/Charts/BarChart';


const Dashboard = (props) => {

    const getVDtPoints = () =>{
        let dt_label_array = ['On-Road', 'Maintenance', 'Idle']
        let vehicles = props.vehicles
        let count_arr = dt_label_array.map((status, id) =>{
            let count = vehicles.filter(obj => obj.status===status).length
            return count
            })
        return ({label_arr: dt_label_array, counts: count_arr})
    }
    const getDDtPoints = () =>{
        let dt_label_array = ['On-Duty', 'Off-Duty', 'Idle']
        let drivers = props.drivers
        let count_arr = dt_label_array.map((status, id) =>{
            let count = drivers.filter(obj => obj.status===status).length
            return count
            })
        return ({label_arr: dt_label_array, counts: count_arr})
    }
    return (
        <div style={{display: "flex", justifyContent: "center"}} >
        <div style={{width: "30%"}}>
        <BarChart title = "Vehicles" dtpoints = {getVDtPoints()}/>
        </div>
        <div style={{marginLeft: "25%", width: "35%"}}>
        <BarChart title = "Drivers" dtpoints = {getDDtPoints()}/>
        </div>
      </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        user_info: state.user.user_info,
        vehicles: state.cars.vehicles,
        drivers: state.drivers.driverList
    }
}

export default connect(mapStateToProps)(Dashboard);