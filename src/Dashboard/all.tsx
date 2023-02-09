import Closer from "./Closer";
import Table from "./Table";
import InfoCards from "./home/InfoCards";
import { Routes, Route } from "react-router-dom";
import BallanceCard from "./home/BallanceCard";
import { AdminCards } from "./home/AdminCards";

const x= {
  value:1254,
  tittle: "Total",
  color:"green"
}

const  carrdsaray= [{
  value:2541,
  tittle: "Accu",
  color:"blue"
},{
  value:7524,
  tittle: "Trades",
  color:"red"
},{
  value:1000,
  tittle: "OPR",
  color:"yellow"
},x]

const Example = () => {
  return (
    <>
      <div className=" min-h-full">
        {/* { Discloser } */}
        <Closer />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with Chileds And route */}
            <div className="px-4  py-6 sm:px-0">
              <Routes>
                <Route
                  path="/*"
                  element={
                    <>
                     <AdminCards carrdsAray={ carrdsaray}></AdminCards>
                      <InfoCards></InfoCards>
                      <div>
                      <BallanceCard></BallanceCard>
                      </div>
                    
                    </>
                  }
                />
                <Route path="/team" element={<Table  tableType="users" ></Table>} />
                <Route path="/projects" element={<Table  tableType="projects" ></Table>} />
              </Routes>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default Example;
