import React from 'react'
import { connect } from 'react-redux'
import { updateDriver } from '../store/actions/driverActions'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

class EditDriver extends React.Component{
    constructor(props){
        super(props);
        this.state={
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
    }
    componentWillMount(){
        //console.log(this.props.match.params);
        let { driverId } = this.props.match.params;
        let driverdata = this.props.driverlist.filter((list)=>{
            return list.id==driverId
        })
        //console.log(driverdata[0].name);
        this.setState({
            data : {...this.state.data,['name']:driverdata[0].name,['contactno']:driverdata[0].contactno,['shiftid']:driverdata[0].shiftid,['driverStatus']:driverdata[0].driverStatus,['id']:driverId,['userid'] : driverdata[0].userid}
        });
    }
onChange=(e)=>{
    this.setState({
        data : {...this.state.data,[e.target.name]:e.target.value}
    })
}
onSubmit=(e)=>{
    e.preventDefault();
    const { data } = this.state;
    let isvalid = this.formValidate(data)
    if(isvalid){
        let updateDriver = this.props.updateDriver(data);
        if(updateDriver){
            this.props.history.push("/drivers");
        }
    }
}
formValidate=(data)=>{
    let errors ={};
    let isVlaid = true; 
    if(!data.name){
        errors.name="Name is required.";
    }
    if(!data.contactno){
        errors.contactno="Contact No is required.";
    }
    if(Object.keys(errors).length){
        isVlaid = false;
        this.setState({errors : errors})
    }
return isVlaid
}
    render(){
       // console.log(this.props.location)
       // console.log(this.state.data);
        const { data, errors } = this.state;
        return(
            <div className="container">
                <NavLink to="/drivers">Driver List</NavLink>
                <form onSubmit={this.onSubmit}>
                
                <div className="form-group row" style={{margin:"0px"}}>
                    <label htmlFor="staticName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-5">
                        <input type="text" name="name" className="form-control-plaintext" id="staticName" value={data.name} onChange={this.onChange} placeholder="Enter Name" />
                        {errors.name && <label style={{color:"red"}}>{errors.name}</label>}
                    </div>
                </div>
                <div className="form-group row" style={{margin:"0px"}}>
                    <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Contact No</label>
                    <div className="col-sm-5">
                        <input type="text" className="form-control form-control-sm" name="contactno" id="colFormLabelSm" value={data.contactno} onChange={this.onChange} placeholder="Enter Phone No" />
                        {errors.contactno && <label style={{color:"red"}}>{errors.contactno}</label>}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Status</label>
                    <div style={{ color: "black" }} className="col-sm-5">
                        <select name="driverStatus" onChange={this.onChange} style={{ display: "block" }} className="custom-select" defaultValue={data.driverStatus}>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                        
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Shift</label>
                    <div style={{ color: "black" }} className="col-sm-5">
                        <select name="shiftid" onChange={this.onChange} style={{ display: "block" }} className="custom-select" defaultValue={data.shiftid}>
                            <option value="day">Day</option>
                            <option value="night">Night</option>
                        </select>

                    </div>
                </div>
                <div className="form-group row">
                <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
//console.log(state.drivers.driverList)
    return{
        driverlist : state.drivers.driverList
    }
}
export default connect(mapStateToProps,{ updateDriver })(withRouter(EditDriver));