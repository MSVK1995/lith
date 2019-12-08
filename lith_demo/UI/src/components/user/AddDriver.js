import React from 'react'
import AddDriverForm from '../forms/AddDriverForm';
import { connect } from  'react-redux';
import PropTypes from 'prop-types'
import { adddriverdata } from '../store/actions/driverActions';

class AddDriver extends React.Component {
    
    render() {
        const { adddriverdata } = this.props;
        const { lastInfo } = this.props.location
        //console.log(lastInfo);
        return (
            <div className="container">
                <AddDriverForm lastInfo={lastInfo} adddriverdata={adddriverdata} />
            </div>
            )
    }
}

AddDriver.propTypes={
    adddriverdata :  PropTypes.func.isRequired
}

export default connect(null,{ adddriverdata })(AddDriver)