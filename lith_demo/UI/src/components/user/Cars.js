import React from 'react';
import CarList from './CarList';

const Cars = () => {
    return (
        <div style={{marginTop: "15px"}}
        className="container grey-text text-darken-3">
            <table className="highlight centered">
                <thead>
                    <tr>
                        <th>Vehicle type</th>
                        <th>Status</th>
                        <th>SOC/Charge</th>
                        <th colSpan={4}>View</th>
                    </tr>
                </thead>
                
                <tbody>
                    <CarList />
                </tbody>
            </table>
        </div>
    )
}

export default Cars;