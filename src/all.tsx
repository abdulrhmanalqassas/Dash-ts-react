import Closer from "./Closer";
import Table from "./Table";
import InfoCards from "./InfoCards"
import BallanceCard from "./BallanceCard"


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
              <Table></Table>
              <InfoCards></InfoCards>
              <BallanceCard></BallanceCard>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default Example;
