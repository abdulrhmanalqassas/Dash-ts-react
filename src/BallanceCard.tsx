export{}

const Card = () => {
    return (
      <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
        <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
          <div>
            <h2 className="text-gray-900 text-lg font-bold">Total Ballance</h2>
            <h3 className="mt-2 text-xl font-bold text-yellow-500 text-left">
              + 150.000 ₭
            </h3>
            <p className="text-sm font-semibold text-gray-400">
              Last Transaction
            </p>
            <button className="text-sm mt-6 px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">
              Add to cart
            </button>
          </div>
          <div className="bg-gradient-to-tr from-yellow-500 to-yellow-400 w-32 h-32  rounded-full shadow-2xl shadow-yellow-400 border-white  border-dashed border-2  flex justify-center items-center ">
            <div>
              <h1 className="text-white text-2xl">Basic</h1>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const BallanceCard = () => {
    return (
      <section className="mx-auto text-gray-600 body-font bg-gray-50 h-screen flex justify-center items-center">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            {[1, 2, 3, 4, 5, 6].map(() => {
              return <Card></Card>;
            })}
          </div>
        </div>
      </section>
    );
  };

  export default BallanceCard ;