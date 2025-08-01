import React from 'react'
import { RadarChart,Radar,PolarGrid,PolarAngleAxis,PolarRadiusAxis,Legend,Tooltip } from 'recharts'


const data = [ 
    {subject: 'math',A:90, B: 70},
    {subject: 'english',A:78, B: 76},
     {subject: 'hindi',A:90, B: 98},
      {subject: 'science',A:76, B: 89},
       {subject: 'math',A:55, B: 80},
];
const Chart5 = () => {
  return (
    <div>
<h1> this is radarchart component</h1>
<RadarChart height={500} width={500} data={data} cx="50%" cy="50%" outerRadius="70%">
    <Radar name=' student  a' dataKey="A" stroke='#a83e32' fill='#32a88d' fillOpacity={0.5}/>
    <Radar name= "student b" dataKey="B" stroke='#a8328b' fill='#5432a8' fillOpacity={0.4}/>

    <PolarGrid />
    <PolarAngleAxis/>
    <PolarRadiusAxis/>
    <Legend/>
    <Tooltip/>

</RadarChart>

    </div>
  )
}

export default Chart5