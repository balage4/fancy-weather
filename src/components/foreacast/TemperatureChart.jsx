import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  ResponsiveContainer,
} from 'recharts';

const TemperatureChart = ({ temperaturesData }) => (
  <ResponsiveContainer height={300}>
    <LineChart data={temperaturesData}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="minTemp" stroke="#8884d8" />
      <Line type="monotone" dataKey="maxTemp" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export default TemperatureChart;
