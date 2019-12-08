import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

class DriverStatus extends React.Component{
    render(){

        let { statusList } = this.props;
//        console.log(statusList);
        return(
            <div className="container scale-in">
                <nav style={{backgroundColor : 'white'}}>
                    <NavLink style={{color:'black',margin:"0px 25px 0px 12px"}} to="/drivers">Driver List</NavLink>
                </nav>
                <table style={{color:'black'}}>
                    <thead>
                        <tr>
                            <th>Driver Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                    
                    {
                        statusList.map((list)=>(
                            <tr key={list.id}>
                                <td>{list.id}</td>
                                <td>{list.driverStatus}</td>
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

export default connect(mapStateToProps)(DriverStatus) 