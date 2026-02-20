import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

/*
Instead of stacking with stackId,
we manually calculate cumulative values.

mid = a + b
top = a + b + c
*/

const rawData = [
  { name: "Jan", a: 300, b: 20, c: 50 },
  { name: "Feb", a: 310, b: 30, c: 55 },
  { name: "Mar", a: 315, b: 50, c: 52 },
  { name: "Apr", a: 320, b: 40, c: 49 },
  { name: "May", a: 330, b: 42, c: 54 },
  
];

// Convert to cumulative format
const data = rawData.map((item) => ({
  name: item.name,
  base: item.a,
  mid: item.a + item.b,
  top: item.a + item.b + item.c,
}));

export default function UserBehavior() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6 font-[poppins]">

      <h2 className="text-xl font-light ">Users Behavior</h2>
      <p className="text-sm text-gray-400 mb-6 font-extralight">
        24 Hours Performance
      </p>

      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#eee"
              vertical={false}
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[
                300,
                (dataMax) =>
                  Math.ceil(dataMax / 50) * 50
              ]}
              tickCount={4}
              axisLine={false}
              tickLine={false}
              allowDecimals={false}
            />

            <Tooltip />

            {/* Bottom Layer */}
            <Area
  type="monotone"
  dataKey="base"
  stroke="#3b82f6"
  fill="#3b82f6"
  fillOpacity={0.4}
/>

<Area
  type="monotone"
  dataKey="mid"
  stroke="#f97316"
  fill="#f97316"
  fillOpacity={0.4}
/>

<Area
  type="monotone"
  dataKey="top"
  stroke="#22c55e"
  fill="#22c55e"
  fillOpacity={0.4}
/>


          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="text-sm text-gray-400 mt-4">
        ⟳ Updated 3 minutes ago
      </div>

    </div>
  );
}
