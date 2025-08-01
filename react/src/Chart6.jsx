import React from 'react'
import { ScatterChart,Scatter,XAxis,YAxis,CartesianGrid,Tooltip,Legend } from 'recharts'

const data = [ 
    {name: 'Jan',  value:400},
    {name: 'Feb',  value:200},
    {name: 'Mar',  value:300},
    {name: 'Apr',  value:400},
    {name: 'May',  value:500}
];
const Chart6 = () => {
  return (
    <div>
<h1>this is scatter component</h1>
<ScatterChart height={500} width={500} data={data} >
    <Scatter dataKey="value" />
    <XAxis dataKey="name" />
    <YAxis/>
    <CartesianGrid strokeDasharray="5 5" stroke='#32a844'/>
    <Legend/>
    <Tooltip/>

</ScatterChart>
    </div>
  )
}

export default Chart6