import React from 'react';

import CanvasJSReact from '../canvasjs.react';

const barChart = (props) =>{
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
        theme: "light2",
		animationEnabled: true,
        title: {
          text: props.title
        },
        data: [{				
                  type: "column",
                  dataPoints: props.dtpoints
         }]
     }
     return (
         <div>
             {console.log(props.dtpoints)}
             <CanvasJSChart options = {options} />
         </div>
     )
}

export default barChart;
