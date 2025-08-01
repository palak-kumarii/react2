import React from 'react'
import { BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend } from 'recharts'


const data = [ 
    {name: 'Jan',  value:400},
    {name: 'Feb',  value:200},
    {name: 'Mar',  value:300},
    {name: 'Apr',  value:400},
    {name: 'May',  value:500}
];
const Chart2 = () => {
  return (
    <div>
<h1>this is bar chart component</h1>
<BarChart width={500} height={500} data={data}>
    <Bar dataKey="value" stroke='#34ebde' fill='#4634eb'/>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid strokeDasharray="10 10" stroke='#eb34a8'/>
    <Tooltip/>
    <Legend/>
</BarChart>

    </div>
  )
}

export default Chart2