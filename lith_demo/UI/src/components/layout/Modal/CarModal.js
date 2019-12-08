import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from 'react-redux';

import DashBoard  from '../../user/Dashboard';
import StatusForm  from '../../forms/ChangeStatusForm';
import ReportIssueForm from '../../forms/ReportIssueForm';
import CarDocs from '../../documents/cardocs/CarDocs';
class Modal extends Component {

  state = {
    renderComp: null
  }

  closeModal = () =>{
    let instance = M.Modal.getInstance(this.Modal);
    instance.close();
  }

  renderComponent = () =>{
    const options = {
      // onOpenStart: () => {
      //   console.log("Open Start");
      // },
      // onOpenEnd: () => {
      //   console.log("Open End");
      // },
      // onCloseStart: () => {
      //   console.log("Close Start");
      // },
      // onCloseEnd: () => {
      //   console.log("Close End");
      // },
      dismissible: false,
    };
    M.Modal.init(this.Modal, options);

    let textVal = this.props.btnText.toLowerCase().replace(' ', '')
    let instance = M.Modal.getInstance(this.Modal);
    let modalComponent = null
    switch(textVal){
      case 'changestatus':
        modalComponent = <StatusForm  car_id = {this.props.veh_id} closeOnUpdate={this.closeModal}/>
        break;
      case 'reportissue':
        modalComponent = <ReportIssueForm car_id = {this.props.veh_id} closeOnReport={this.closeModal}/>
        break;
      case 'viewdocs':
        modalComponent = <CarDocs />
        break;
      case 'viewmap':
        break;
      default:
        modalComponent = null
    }
    
    this.setState({
      renderComp: modalComponent
    })

  instance.open();
  }

  render() {
    return (
      <>
        <a onClick = {this.renderComponent}
          className="btn modal-trigger z-depth-0"
          data-target="modal1"
          target=""
        >
          {this.props.btnText}
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal modal-fixed-footer"
          style={{maxHeight: "75%", width: "80%"}}
        >
          <div className="modal-content">
            {this.state.renderComp}
          </div>
          <div className="modal-footer grey lighten-2">
            <a href="#" className="modal-close btn-flat text-black grey darken-1">
              Close
            </a>
          </div>
        </div>
      </>
    );
  }
}


export default (Modal);