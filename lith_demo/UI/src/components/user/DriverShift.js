import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'

class DriverShift extends React.Component{
    render(){
        let { statusList } = this.props;
        return(
            <div className="container scale-in">
                <nav style={{backgroundColor : 'white',margin:"0px 25px 0px 12px"}}>
                    <NavLink style={{color:'black'}} to="/drivers">Driver List</NavLink>
                </nav>
                <table style={{color:'black'}}>
                    <thead>
                        <tr>
                            <th>Driver Id</th>
                            <th>Shift</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                        statusList.map((list)=>(
                            <tr key={list.id}>
                                <td>{list.id}</td>
                                <td>{list.shiftid}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    
    return {
        statusList : state.drivers.driverList
    }
}

export default connect(mapStateToProps)(DriverShift)