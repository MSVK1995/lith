import React, { Component } from 'react';
import { connect } from 'react-redux';


class ReportIssueForm extends Component {

    state={
        reportContent : ""
    } 

     getReport = (e) =>{
        this.setState({
            reportContent: e.target.value
        })
    }

     reportIssue = (e) =>{
        e.preventDefault()
        alert("Issue has been reported to the management!")
        this.setState({
            reportContent: ""
        })
        if (typeof this.props.closeOnReport === 'function') {
            this.props.closeOnReport();
        }
    }
    render(){
        return (
            <div>
            <form onSubmit={this.reportIssue}>
                <div className="input-field">
                  <textarea 
                  id="textarea1" 
                  className="materialize-textarea" 
                  maxLength="150" onChange={this.getReport}
                  required={true} 
                  value={this.state.reportContent}
                  >
                  </textarea>
                  <label htmlFor="textarea1">Report Issue</label>
                </div>
                <div className="input-field">
                        <button 
                        className="btn blue darken-2 z-depth-0">
                        Report
                        </button>
                    </div>
            </form>
          </div>
        )
    }

}

export default ReportIssueForm;