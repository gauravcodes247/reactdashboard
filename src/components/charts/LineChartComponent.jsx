import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Page A", uv: 400 },
  { name: "Page B", uv: 300 },
  { name: "Page C", uv: 320 },
  { name: "Page D", uv: 200 },
  { name: "Page E", uv: 278 },
  { name: "Page F", uv: 189 }
];

const LineChartComponent = () => {
  return (
    <div className="w-[800px] h-[350px] bg-white rounded-lg shadow-md p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#6366f1" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
