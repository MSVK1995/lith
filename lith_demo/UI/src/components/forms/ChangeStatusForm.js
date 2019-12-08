import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';


import {updateVehicleStatus} from '../store/actions/userActions';

class StatusForm extends Component {

    state = {
        car: {},
        option: ""
    }

    options = [
        { label: "On-Road", value: 1 },
        { label: "Idle", value: 2 },
        { label: "Maintenance", value: 3 }
        ]

    setStatus = (e) =>{
        this.setState({
            option: e['label']
        })
    }

    updateStatus = () => {
        if (this.state.option) {
            let temp_car = { ...this.props.car_obj, status: this.state.option }
            this.setState({
                car: temp_car
            }, () => {this.props.updateVehicleStatus(this.state.car) })
        }


        if (typeof this.props.closeOnUpdate === 'function') {
            this.props.closeOnUpdate();
        }
    }
    

    render() {
        return (
            <div>
                <Select
                options={this.options}
                onChange={option => this.setStatus(option)}
                />
                <div className="input-field">
                    <button 
                    className="btn blue darken-2 z-depth-0"
                    onClick = {this.updateStatus}>
                    Update
                    </button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        updateVehicleStatus: (car_obj) => dispatch(updateVehicleStatus(car_obj))
    }

}

const mapStateToProps = (state, ownProps) =>{
        return {
          car_obj: state.cars.vehicles[ownProps.car_id]
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusForm);