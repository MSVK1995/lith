import React from 'react';
import { connect } from 'react-redux';

import BarChart from '../../assets/Charts/BarChart';


const Dashboard = (props) => {

    const getVDtPoints = () =>{
        let dt_array = [['On-Road', 5], ['Idle', 6], ['Maintenance', 7]]
        return dt_array.map(([key, val]) => ({label: key, y: val}))
    }
    const getDDtPoints = () =>{
        let dt_array = [['On-duty', 4], ['Idle', 2], ['Off-Duty', 1]]
        return dt_array.map(([key, val]) => ({label: key, y: val}))
    }
    return (
        <div style={{display: "flex", marginTop: "15%"}}>
        {console.log(props.user_info)}
        <div style={{marginLeft: "5%", width: "30%"}}>
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
        user_info: state.user.user_info
    }
}

export default connect(mapStateToProps)(Dashboard);