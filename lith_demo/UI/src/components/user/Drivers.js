import React from 'react';
import DriverList from './DriverList'

const Drivers = (state) => {
    
//console.log(driverList[driverList.length-1].id)
//console.log();
    return (
        <div style={{marginTop: "15px"}}
        className="container grey-text text-darken-3">
            <table className="highlight centered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Shift</th>
                        <th colSpan={3}>View</th>
                    </tr>
                </thead>
                
                <tbody>
                    <DriverList />
                </tbody>
            </table>
        
        {/*<div className="container scale-in">
                <nav style={{backgroundColor : 'white'}}>
                    <span style={{color:"black",margin:"0px 25px 0px 12px" }}>Drivers list</span>
                     <NavLink style={{color:"black"}} to="/driverstatus">Driver Status</NavLink> | <NavLink style={{color : 'black'}} to="/drivershift">Driver Shift</NavLink>
                </nav>
                <table style={{color:'black'}}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>UserId</th>
                            <th>Name</th>
                            <th>Contact No</th>
                            <th>Login Time</th>
                            <th>Status</th>
                            <th>Shift</th>

                        </tr>
                    </thead>

                    <tbody>
                    {
                        driverList.map((list)=>(<tr key={list.userid}>
                            <td>{list.id}</td>
                            <td>{list.userid}</td>
                            <td>{list.name}</td>
                            <td>{list.contactno}</td>
                            <td>{list.loginTime}</td>
                            <td>{list.driverStatus}</td>
                            <td>{list.shiftid}</td>

                        </tr>))
                    }
                        
                    </tbody>
                </table>
                </div>*/}
                </div>
    )
}

export default Drivers;