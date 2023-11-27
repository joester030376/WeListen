import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './chart.scss';

const data = [
    { name: "January", total: 1200},
    { name: "February", total: 2100},
    { name: "March", total: 800},
    { name: "April", total: 1600},
    { name: "May", total: 900},
    { name: "June", total: 1700}
]

     
const Chart = ({aspect, title}) => {
  return (
    <div className="chart">
        <div className="title">{title}</div>
        <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
          <XAxis dataKey="name" stroke="gray" />
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;