import React from 'react'
import{LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from 'recharts'

const data = [ 
    {name: 'Jan',  value:400},
    {name: 'Feb',  value:200},
    {name: 'Mar',  value:300},
    {name: 'Apr',  value:400},
    {name: 'May',  value:500}
];

const Chart1 = () => {
  return (
    <div>
<h1>This is line chart component</h1>
<LineChart height={500} width={500} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <Line dataKey="value" type="monotone" stroke='#eb4034'/>
    <CartesianGrid strokeDasharray="10 3"/>
    <Tooltip/>
<Legend/>
</LineChart>

    </div>
  )
}

export default Chart1