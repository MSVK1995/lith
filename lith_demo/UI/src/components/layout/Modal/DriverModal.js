import React, { Component } from "react";
import { connect } from 'react-redux';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Select from 'react-select';
import { updateDriverShiftStatus } from '../../store/actions/driverActions'

class DriverModal extends Component {
state={
  driverStatus:"",
  shiftid : ""
}

  componentDidMount() {
    const options = {
      onOpenStart: () => {
        this.props.onOpenStart();
      },
      onOpenEnd: () => {
        //console.log("Open End");
      },
      onCloseStart: () => {
        //console.log("Close Start");
      },
      onCloseEnd: () => {
       // console.log("Close End");
      },
      dismissible: false,
      
    };
    M.Modal.init(this.Modal, options);
    // If you want to work on instance of the Modal then you can use the below code snippet 
    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
   // console.log(this.props.btnText);
   // console.log(M);
   
  }
  updateStatus=(e,shiftStatus,actionName)=>{
    e.preventDefault();
    this.props.updateDriverShiftStatus(shiftStatus,this.props.details.id,actionName)
   // console.log('updateStatus');
  }
  onChange=(option)=>{
    this.setState({driverStatus:option.value})
//console.log(option);
  }
  options = [
    { label: "On-Duty", value: 'onduty' },
    { label: "Off-Duty", value: 'offduty' },
    { label: "Idle", value: 'idle' }
    ]
    defaultStatus = [];
    defaultShift = [];
    optionshift = [
      { label: "Day", value: 'day' },
    { label: "Night", value: 'night' }
    ]  
    onChangeshift=(option)=>{
    //  console.log(option);
      this.setState({ shiftid:option.value });
    }
  render() {
    
    let { details } = this.props;
    this.defaultStatus = this.options.filter((list)=>list.value===this.props.details.driverStatus) 
   this.defaultShift = this.optionshift.filter((list)=>list.value===this.props.details.shiftid)
   //console.log(this.defaultShift);
    return (
      <>
        <a
          className="btn modal-trigger z-depth-0"
          data-target={`modal${this.props.d_id}`}
          target=""
        >
          {this.props.btnText}
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id={`modal${this.props.d_id}`}
          className="modal modal-fixed-footer"
          style={{maxHeight: "75%", width: "80%"}}
        >
          <div className="modal-content">
            <form>
                {this.props.view==='viewdoc' && (
                  <div>
                  <div className="row">
                    <div className="input-field col s6">
                      <label>Id : <span>{details.id}</span></label>
                    </div>
                    <div className="input-field col s6">
                      <label>User Id : <span>{details.userid}</span></label>
                    </div>
                  </div>
                  <div className="row">
                  <div className="input-field col s6">
                    <label>Name : <span>{details.name}</span></label>
                  </div>
                  <div className="input-field col s6">
                    <label>Contact No : <span>{details.contactno}</span></label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <label>Login Time : <span>{details.loginTime}</span></label>
                  </div>
                  <div className="input-field col s6">
                    <label>Status : <span>{details.driverStatus}</span></label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <label>Shift : <span>{details.shiftid}</span></label>
                  </div>
                </div>
                </div>
                )}
                {this.props.view==='viewstate' && (
                  <div>
                    <Select
                options={this.options}
                onChange={option => this.onChange(option)}
                defaultValue={this.defaultStatus}
                />
                <div className="input-field">
                    <button 
                    className="btn blue darken-2 z-depth-0"
                    onClick = {(e)=>this.updateStatus(e,this.state.driverStatus,'driverStatus')}>
                    Update
                    </button>
                </div>
                  </div>
                )}
                {this.props.view==='viewshift' && (
                  <div>
                    <Select
                options={this.optionshift}
                onChange={option => this.onChangeshift(option)}
                defaultValue={this.defaultShift}
                />
                <div className="input-field">
                    <button 
                    className="btn blue darken-2 z-depth-0"
                    onClick = {(e)=>{this.updateStatus(e,this.state.shiftid,'shiftid')}}>
                    Update
                    </button>
                </div>
                  </div>
                )}
            </form>
          </div>
          <div className="modal-footer">
            <a href="#" className="modal-close btn-flat">
              Close
            </a>
          </div>
        </div>
      </>
    );
  }
}


export default connect(null,{ updateDriverShiftStatus })(DriverModal);