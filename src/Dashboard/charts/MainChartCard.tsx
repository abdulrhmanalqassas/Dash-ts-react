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
      pv: 9800,
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

export const MainChartCard = ()=>{
    return(
        <div className="flex content-around flex-wrap h-fit my-3  py-4 px-3 rounded-xl border  border-gray-200 bg-white">
        <div className="h-96 w-4/5">
        <ResponsiveContainer className="grow " width="100%"height="100%">
          <AreaChart
            data={data}
          >
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
             <Area
              type="monotone"
              dataKey="pv"
              stroke="red"
              fill="cyan"
            />
             <Area
              type="monotone"
              dataKey="amt"
              stroke="green"
              fill=" #cff9d3"
            />
          </AreaChart>
        </ResponsiveContainer>
        </div>
       
        <div className="grow content-center">
         { [1,2,3].map(()=><div className="text-xl  mb-2 place-self-center text-center px-10 py-4 rounded-xl border border-gray-400 w-full" >
          <h5 className="text-xl" >tittle</h5>
          <h5  className="text-3xl  font-bold text-gray-700 " >2554</h5>
          </div>)}
        </div>
      </div>

    )
}