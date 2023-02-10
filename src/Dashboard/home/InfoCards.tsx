import { UpArrow, ChartsTable, Chart3, Chart2, Chart1 } from "../charts/Charts";

const CardHeader = () => {
  return (
    <>
      <div>
        <h5 className="text-xl text-gray-600 text-center">Global Activities</h5>
        <div className="mt-2 flex justify-center gap-4">
          <h3 className="text-3xl font-bold text-gray-700">$23,988</h3>
          <div className="flex items-end gap-1 text-green-500">
            {UpArrow}
            <span>2%</span>
          </div>
        </div>
        <span className="block text-center text-gray-500">
          Compared to last week $13,988
        </span>
      </div>
    </>
  );
};

const InfoCard = () => {
  return (
    <>
      {[
        { chart: <Chart1 /> },
        { chart: <Chart2 /> },
        { chart: <Chart3 /> },
      ].map((elem) => {
        return (
          <div className="md:col-span-2 lg:col-span-1">
            <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
              {elem.chart}
              <CardHeader></CardHeader>
              {<ChartsTable></ChartsTable>}
            </div>
          </div>
        );
      })}
    </>
  );
};

const InfoCards = () => {
  return (
    <div className="my-auto mb-6 ">
      <div className="px-6 pt-6 2xl:container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard></InfoCard>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
