import React from 'react'
import { RadialBarChart,RadialBar,Legend,Tooltip } from 'recharts';

const data = [ 
    {name: 'Jan',  value:100,fill:'#add2ff'},
    {name: 'Feb',  value:200,fill:'#f56ec8'},
    {name: 'Mar',  value:150,fill:'#8df57a'},
    {name: 'Apr',  value:300,fill:'#837af5'},
    {name: 'May',  value:250,fill:'#fa8775'}
];
const Chart7 = () => {
  return (
    <div>
      <h1>this is RadialBar Chart component</h1>
      <RadialBarChart height={500} width={500} data={data} cx ="50%" cy="50%" outerRadius={200} innerRadius={30}barSize={10}>
        <RadialBar dataKey="value" stroke='#2b2928'/>
        <Legend/>
        <Tooltip/>
      </RadialBarChart>

    </div>
  )
}

export default Chart7