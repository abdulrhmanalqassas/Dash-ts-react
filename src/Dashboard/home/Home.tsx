import InfoCards from "./InfoCards";
import { Routes, Route } from "react-router-dom";import BallanceCard from "./BallanceCard";
import { AdminCards } from "./AdminCards";
import { MainChartCard } from "../charts/MainChartCard";

const x = {
  value: 1254,
  tittle: "Total",
  classColor: `bg-green-200 py-2 rounded-md `,
  place: "main",
};

const carrdsaray = [
  {
    value: 2541,
    tittle: "Accu",
    classColor: `bg-blue-200 py-2 rounded-md `,
    place: "main",
  },
  {
    value: 7524,
    tittle: "Trades",
    classColor: `bg-red-200 py-2 rounded-md `,
    place: "main",
  },
  {
    value: 1000,
    tittle: "OPR",
    classColor: `bg-yellow-200 py-2 rounded-md `,
    place: "main",
  },
  x,
];

const Home = () => {
  return (
    <>
      <AdminCards carrdsAray={carrdsaray}></AdminCards>
      {/* {main chart card } */}
      <MainChartCard />
      <InfoCards></InfoCards>
      <div>
        <BallanceCard></BallanceCard>
      </div>
    </>
  );
};

export default Home;
