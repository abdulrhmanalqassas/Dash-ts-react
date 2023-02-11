import Closer from "./Closer";
import Table from "./Table";

import { Routes, Route } from "react-router-dom";

import Home from "./home/Home";

const DashBoard = () => {
  return (
    <>
      <div className=" min-h-full">
        {/* { Discloser } */}
        <Closer />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              AlQassas Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with Chileds And route */}
            <div className="px-4  py-6 sm:px-0">
              <Routes>
                <Route path="/*" element={<Home />} />
                <Route
                  path="/Dash-ts-react/team"
                  element={<Table tableType="users"></Table>}
                />
                <Route
                  path="/Dash-ts-react/projects"
                  element={<Table tableType="projects"></Table>}
                />
              </Routes>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default DashBoard;
