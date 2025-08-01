import React from 'react'
import{AreaChart,Area,Tooltip,Legend,XAxis,YAxis,CartesianGrid} from 'recharts'


const data = [ 
    {name: 'Jan',  value:400},
    {name: 'Feb',  value:200},
    {name: 'Mar',  value:300},
    {name: 'Apr',  value:400},
    {name: 'May',  value:500}
];
const Chart4 = () => {
  return (
    <div>
<AreaChart height={500} width={500} data={data}>
<Area dataKey="value" fill='#97a832' type="monotone" />
<XAxis dataKey="name"/>
<YAxis/>
<CartesianGrid strokeDasharray="5 5" stroke='#34eb64'/>
<Tooltip/>
<Legend/>
</AreaChart>

    </div>
  )
}

export default Chart4