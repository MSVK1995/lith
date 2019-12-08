import React from 'react'
import { connect } from 'react-redux'
import DriverModal from '../layout/Modal/DriverModal'

class DriverList extends React.Component{
    constructor(){
        super();
        this.state={
            activeItemId : ""
        }
        this.btnText = ['View Docs', 'Change Status', 'Change Shift'];
    }
    capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    onOpenStart=(id)=>{
        this.setState({activeItemId : id },function(){
          // console.log(this.state);
        });
    }
    render(){
        const { driverList } = this.props;
        return(
            driverList.map((list)=>{
                return(
                <tr key={list.id}>
                    <td>{list.id}</td>
                    <td>{list.name}</td>
                    <td>{this.capitalizeFirstLetter(list.status)}</td>
                    <td>{this.capitalizeFirstLetter(list.shiftid)}</td>
                    <td><DriverModal onOpenStart={()=>this.onOpenStart(list.id)}
                    d_id={list.id+"d"}
                    itemId={this.state.activeItemId}
                    btnText="View Docs" 
                    view="viewdoc"
                    details={list}
                    />
                    </td>
                    <td><DriverModal onOpenStart={()=>this.onOpenStart(list.id)}
                    d_id={list.id+"s"}
                    itemId={this.state.activeItemId}
                    btnText="Change Status" 
                    view="viewstate"
                    details={list}
                    />
                    </td>
                    <td><DriverModal onOpenStart={()=>this.onOpenStart(list.id)}
                    d_id={list.id+"sh"}
                    itemId={this.state.activeItemId}
                    btnText="Change Shift" 
                    view="viewshift"
                    details={list}
                    />
                    </td>
                </tr>
                )
            })

        )
    }
}

const mapStateToProp = (state) => {
    //console.log(state);
 return{
    driverList : state.drivers.driverList
 }
}

export default connect(mapStateToProp)(DriverList)