import React from 'react';


import CarDocList from './CarDocList';

const CarDocs = () =>{
    return (
        <div style={{marginTop: "15px"}}
        className="container grey-text text-darken-3">
            <table className="highlight centered">
                <thead>
                    <tr>
                        <th colSpan={3}>Vehicle Documents</th>
                    </tr>
                </thead>
                
                <tbody>
                    <CarDocList />
                </tbody>
            </table>
        </div>
    )
}

export default CarDocs;