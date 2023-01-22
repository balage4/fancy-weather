import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const TemperatureChart = ({ temperaturesData }) => (
  <ResponsiveContainer height={300}>
    <LineChart data={temperaturesData} domain={['auto', 'auto']}>
      <XAxis dataKey="name" />
      <YAxis /> <Tooltip />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line
        type="monotone"
        dataKey="minTemp"
        stroke="#334cd6"
        strokeWidth={2}
      />
      <Line
        type="monotone"
        dataKey="maxTemp"
        stroke="#fc840c"
        strokeWidth={2}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default TemperatureChart;
