import React from 'react';
import { connect } from 'react-redux';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


import Modal from '../layout/Modal/CarModal';

const CarList = (props) => {
    let btnText = ['View Map', 'View Docs', 'Change Status', 'Report Issue']
    const theme = {
        danger: {
            symbol: "",
            color: 'red'
        },
        warning: {
            color: '#e8e346'
        },
        excellent: {
            symbol: "",
            color: 'green'
        }
    }

    const getStatus = (charge) =>{
        if(charge>90){
            return "excellent"
        }

        else if(charge>50){
            return ""
        }
        else if(charge > 30){
            return "warning"
        }
        return "danger"

    }
    return (
        props.carlist.map((car, id) => {
            let type = car['type'];
            let charge = car['charge'];
            let coord = Object.values(car['geo']);
            let car_id = id;
            let status= car['status']
            return (
                <tr key={id}>
                    <td>{type}</td>
                    <td>{status}</td>
                    <td style={{ padding: "10px" }}>
                        <Progress percent={charge} status={getStatus(charge)} theme={theme} />
                    </td>
                    {btnText.map((txt_view, id) => {
                        let btn_id = props.carlist.length+id
                        return (
                            <td key={btn_id}><Modal veh_id={car_id}
                                                    btnText={txt_view} 
                                                    loc={coord}
                                                    />
                            </td>
                        )
                    })}
                </tr>
            )
        })
    )
}

const mapStateToProps = (state) => {
    return {
        carlist: state.cars.vehicles
    }
}

export default connect(mapStateToProps)(CarList);