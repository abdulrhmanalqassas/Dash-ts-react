import {
  LineChart,
  Area,
  ReferenceLine,
  AreaChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { AdminCard } from "../home/AdminCards";

const x = {
  value: 1254,
  tittle: "Total",
  classColor: `bg-green-200 py-2 rounded-md `,
  place:""
};
const data = [
  {
    name: "Page A",
    uv: 6000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 7600,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 0,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 0,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 0,
    pv: 4300,
    amt: 7100,
  },
];

export const MainChartCard = () => {
  return (
    <div className="flex  flex-wrap h-fit my-3  py-4 px-3 rounded-xl border content-center border-gray-200 bg-white">
      <div className="h-80 self-center w-4/5">
        <ResponsiveContainer className="grow " width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
            <ReferenceLine
              y={4000}
              label="Max"
              stroke="red"
              strokeDasharray="3 3"
            />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area type="monotone" dataKey="pv" stroke="red" fill="cyan" />
            <Area
              type="monotone"
              dataKey="amt"
              stroke="green"
              fill=" #cff9d3"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
<div className="grow px-4 py-6 items-center self-center">
<div className="grid grid-cols-3 lg:grid-cols-1 gap-1 w-full">
        {[x, {...x, classColor:`bg-red-200 py-2 rounded-md `}, x].map((elem) => {
          return (
            <AdminCard {...elem}/>
          );
        })}
      </div>
</div>
     
    </div>
  );
};
