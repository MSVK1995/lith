import React from 'react';
import { connect } from 'react-redux';

import BarChart from '../../assets/Charts/BarChart';


const Dashboard = (props) => {

    const getDtPoints = () =>{
        let dt_array = [['On-Road', 5], ['Idle', 6], ['Maintenance', 7]]
        return dt_array.map(([key, val]) => ({label: key, y: val}))
    }
    return (
        <div style={{display: "flex", marginTop: "15%"}}>
        {console.log(props.user_info)}
        <div style={{marginLeft: "5%", width: "30%"}}>
        <BarChart title = "Vehicles" dtpoints = {getDtPoints()}/>
        </div>
        <div style={{marginLeft: "25%", width: "35%"}}>
        <BarChart title = "Drivers" dtpoints = {getDtPoints()}/>
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