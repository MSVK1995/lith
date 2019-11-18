import React from 'react';
import { Chart } from "react-google-charts";
// import { fadeInUp } from 'react-animations';
// import Radium, { StyleRoot } from 'radium';
import CanvasJSReact from '../../assets/canvasjs.react';


const Dashboard = () => {
    // const styles = {
    //     fadeIn: {
    //         animation: 'x 1.5s',
    //         animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    //     }
    // }

    // const options = (
    //     <Chart
    //         width={'500px'}
    //         height={'300px'}
    //         chartType="Bar"
    //         loader={<div>Loading Chart</div>}
    //         data={[
    //             ['Year', 'Sales', 'Expenses', 'Profit'],
    //             ['2014', 1000, 400, 200],
    //             ['2015', 1170, 460, 250],
    //             ['2016', 660, 1120, 300],
    //             ['2017', 1030, 540, 350],
    //         ]}
    //         options={{
    //             // Material design options
    //             chart: {
    //                 title: 'Company Performance',
    //                 subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    //             },
    //         }}
    //         // For tests
    //         rootProps={{ 'data-testid': '2' }}
    //     />
    // )

    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
        theme: "light2",
		animationEnabled: true,
        title: {
          text: "Basic Column Chart in React"
        },
        data: [{				
                  type: "column",
                  dataPoints: [
                      { label: "Apple",  y: 10  },
                      { label: "Orange", y: 15  },
                      { label: "Banana", y: 25  },
                      { label: "Mango",  y: 30  },
                      { label: "Grape",  y: 28  }
                  ]
         }]
     }
    return (
        <div style={{display: "flex", marginTop: "15%"}}>
        <div style={{marginLeft: "5%", width: "30%"}}>
        <CanvasJSChart options = {options} />
        </div>
        <div style={{marginLeft: "25%", width: "35%"}}>
        <CanvasJSChart options = {options} />
        </div>
      </div>
    )
}

export default Dashboard;