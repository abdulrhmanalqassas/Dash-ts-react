export {};

interface cardInfo {
  color: string;
  cardInformation: {
    tittle: string;
    transaction: {
      value: number;
      currency: string;
      reason: string;
      type: string;
    };
  };
}



const Card = ({ color, cardInformation }: cardInfo) => {
  return (
    <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
      <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
        <div>
          <h2 className="text-gray-900 text-lg font-bold">
            {cardInformation.tittle}
          </h2>
          <h3 className={`mt-2 text-xl font-bold text-${color}-500 text-left`}>
            {cardInformation.transaction.value}{" "}
            {cardInformation.transaction.currency}
          </h3>
          <p className="text-sm font-semibold text-gray-400">
            {cardInformation.transaction.reason}
          </p>
          <button
            className={`text-sm mt-6 px-4 py-2 bg-${color}-400 text-white rounded-lg  tracking-wider hover:bg-${color}-300 outline-none`}
          >
            See More
          </button>
        </div>
        <div
          className={`bg-gradient-to-tr from-${color}-500 to-${color}-400 w-32 h-32  rounded-full shadow-2xl shadow-${color}-400 border-white  border-dashed border-2  flex justify-center items-center `}
        >
          <div>
            <h1 className="text-white text-2xl">
              {cardInformation.transaction.type}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const cardsApi = [
  {
    color: "yellow",
    cardInformation: {
      tittle: "cashed in",
      transaction: {
        value: 5458,
        currency: "$",
        reason: "cashed in",
        type: "cash",
      },
    },
  },
  {
    color: "red",
    cardInformation: {
      tittle: "out dated",
      transaction: {
        value: 4635,
        currency: "egp",
        reason: "cash out",
        type: "OUT",
      },
    },
  },
  {
    color: "cyan",
    cardInformation: {
      tittle: "string",
      transaction: {
        value: 5,
        currency: "string",
        reason: "string",
        type: "string",
      },
    },
  },
  {
    color: "orange",
    cardInformation: {
      tittle: "string",
      transaction: {
        value: 5,
        currency: "string",
        reason: "string",
        type: "string",
      },
    },
  },
  {
    color: "gray",
    cardInformation: {
      tittle: "string",
      transaction: {
        value: 5,
        currency: "string",
        reason: "string",
        type: "string",
      },
    },
  },
  {
    color: "green",
    cardInformation: {
      tittle: "string",
      transaction: {
        value: 5,
        currency: "string",
        reason: "string",
        type: "string",
      },
    },
  },
];
const BallanceCard = () => {
  return (
    <section className="mx-auto text-gray-600 body-font bg-gray-50  flex justify-center items-center">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          {cardsApi.map((elem, index) => {
            console.log(elem.color);
            return (
              <>
                <Card
                  key={index}
                  color={elem.color}
                  cardInformation={elem.cardInformation}
                ></Card>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BallanceCard;
