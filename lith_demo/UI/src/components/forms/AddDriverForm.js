import React from 'react';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

class AddDriverForm extends React.Component {
    state={
        data : {
            name: "",
            contactno : "",
            driverStatus : "",
            shiftid : "",
            id : "",
            userid : "",
            loginTime : ""
        },
        errors :{}
        
    }
    onChange=(e)=>{
        this.setState({
            data : {...this.state.data,
                id : (this.props.lastInfo && this.props.lastInfo.id) ? this.props.lastInfo.id+1 :  Math.round(Math.random()*1000),
                userid : (this.props.lastInfo && this.props.lastInfo.userid) ? this.props.lastInfo.userid+1 : Math.round(Math.random()*10000) , [e.target.name] : e.target.value,
                'loginTime' : ""}
        })
    }
    onSubmit=(e)=>{
        
        e.preventDefault();
        let checkvalidation = this.formValidation(this.state.data);
        
        if(checkvalidation){
            let addResponse = this.props.adddriverdata(this.state.data);
            if(addResponse){
               this.props.history.push("/drivers")
            }
            //console.log(addResponse);
        }
    }
    formValidation=(data)=>{
        let  errors  ={};
        let isValid=true;
        if(!data.name){
            errors.name="Name is required."
        }
        if(!data.contactno){
            errors.contactno="contactno is required."
        }
        if(!data.driverStatus){
            errors.driverStatus="status is required."
        }
        if(!data.shiftid){
            errors.shiftid="shift is required."
        }
        if(Object.keys(errors).length!==0){
            isValid = false;
            this.setState({errors : errors});
        }else{
            isValid = true;
        }
        return isValid;
    }
    render() {
        let { errors } = this.state;
        return (
            <div>
                <NavLink to="/drivers">Driver List</NavLink>
            <form onSubmit={this.onSubmit}>
                
                <div className="form-group row" style={{margin:"0px"}}>
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-5">
                        <input type="text" name="name" className="form-control-plaintext" onChange={this.onChange} id="staticEmail" placeholder="Enter Name" />
                        {errors.name && <label style={{color:"red"}}>{errors.name}</label>}
                    </div>
                </div>
                <div className="form-group row" style={{margin:"0px"}}>
                    <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Contact No</label>
                    <div className="col-sm-5">
                        <input type="text" className="form-control form-control-sm" name="contactno" onChange={this.onChange}id="colFormLabelSm" placeholder="Enter Phone No" />
                        {errors.contactno && <label style={{color:"red"}}>{errors.contactno}</label>}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Status</label>
                    <div style={{ color: "black" }} className="col-sm-5">
                        <select name="driverStatus" style={{ display: "block" }} onChange={this.onChange} className="custom-select" defaultValue={'DEFAULT'}>
                            <option value="DEFAULT">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                        {errors.driverStatus && <label style={{color:"red"}}>{errors.driverStatus}</label>}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Shift</label>
                    <div style={{ color: "black" }} className="col-sm-5">
                        <select name="shiftid" onChange={this.onChange} style={{ display: "block" }} className="custom-select" defaultValue={'DEFAULT'}>
                            <option value="DEFAULT">Select Shift</option>
                            <option value="day">Day</option>
                            <option value="night">Night</option>
                        </select>
                        {errors.shiftid && <label style={{color:"red"}}>{errors.shiftid}</label>}
                    </div>
                </div>
                <div className="form-group row">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
        )
    }
}
AddDriverForm.propTypes={
    adddriverdata : PropTypes.func.isRequired,
    history : PropTypes.shape({
        push:PropTypes.func.isRequired
    }).isRequired
}
export default withRouter(AddDriverForm)