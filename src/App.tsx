import { ChangeEvent, useState } from "react";
import Footer from "./components/footer";
import data from "./constants/raw";
import Card from "./components/card";
import Input from "./components/input";
type Statetype = {
  id: number;
  name: string;
  position: string;
  telegramId: string;
  stack: string;
};
const App = () => {
  const [States, setStates] = useState({
    id: 0,
    name: "",
    position: "",
    stack: "",
    telegramId: "",
  } as Statetype);
  console.log(States, setStates);

  const [random, setRandom] = useState(0);
  const [layer, setlayer] = useState(false);
  const [Data, setData] = useState(data);
  const randomNumber = () => {
    const randomNum = Math.floor(Math.random() * 13) + 1;
    setRandom(randomNum);
  };
  const Filter = (id: number) => {
    const newData = Data.filter((item) => {
      return item.id !== id;
    });

    setData(newData);
  };
  const PusherData = () => {
    setData([...Data, States]);
    setStates({
      id: 0,
      name: "",
      position: "",
      stack: "",
      telegramId: "",
    } as Statetype);
    setlayer(false);
  };
  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setStates({ ...States, [e.target.name]: e.target.value });
  };

  return (
    <div className=" flex flex-col items-center  bg-gradient-to-tr pt-20 pl-32 pr-32 pb-5 text-white from-violet-600 to-indigo-600 h-full w-full">
      <header>
        <h1 className="font-mono text-5xl">Random Selector</h1>
      </header>
      <main
        className={`grid ${
          Data.length > 0 && !layer
            ? "grid-cols-4 gap-2"
            : "grid-cols-1 w-full "
        } my-10 h-max min-h-[70vh] `}
      >
        {Data.length > 0 && !layer ? (
          Data.map((item, index) => {
            return (
              <Card index={index} item={item} key={index} Filter={Filter} />
            );
          })
        ) : (
          <form
            onSubmit={PusherData}
            className="w-6/12 flex flex-col items-center justify-center mx-auto "
          >
            <Input
              handleChangeText={handleChangeText}
              value={States.name}
              name={"name"}
              placeholder="What is you name?"
            />
            <Input
              handleChangeText={handleChangeText}
              value={States.position}
              name={"position"}
              placeholder="What is you position in team?"
            />
            <Input
              handleChangeText={handleChangeText}
              value={States.stack}
              name={"stack"}
              placeholder="What stack are you working?"
            />
            <Input
              handleChangeText={handleChangeText}
              value={States.telegramId}
              name={"telegramId"}
              placeholder="What is your telegram ID?"
            />
            <button
              onClick={PusherData}
              type="button"
              className="group  relative inline-block overflow-hidden text-lg  border-gray-100 w-52 h-16  font-medium  hover:text-cyan-400 focus:outline-none   font-mono bg-black outline-none text-white rounded shadow-sm hover:shadow-lg  hover:scale-105 transition-all duration-200 "
            >
              <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-cyan-400 transition-all duration-200 group-hover:w-full group-focus:w-full"></span>
              <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-cyan-400 transition-all duration-200 group-hover:h-full group-focus:h-full"></span>
              <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-cyan-400 transition-all duration-200 group-hover:w-full group-focus:w-full"></span>
              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-cyan-400 transition-all duration-200 group-hover:h-full group-focus:h-full"></span>
              Add to cards
            </button>
          </form>
        )}
      </main>

      <button
        onClick={() => setlayer(!layer)}
        className="font-mono text-2xl text-teal-300 bg-transparent border-0 hover:text-teal-500 transition-colors mb-5"
      >
        {!layer
          ? "Add card"
          : Data.length > 1
          ? "Check all cards"
          : `create more cards ${
              Data.length !== 0 && "(you have only one card!)"
            } `}
      </button>
      {!layer && (
        <button
          onClick={() => {
            randomNumber();
          }}
          type="button"
          className="group  relative inline-block overflow-hidden text-lg  border-gray-100 w-52 h-16  font-medium  hover:text-cyan-400 focus:outline-none   font-mono bg-black outline-none text-white rounded shadow-sm hover:shadow-lg  hover:scale-105 transition-all duration-200 "
        >
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-cyan-400 transition-all duration-200 group-hover:w-full group-focus:w-full"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-cyan-400 transition-all duration-200 group-hover:h-full group-focus:h-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-cyan-400 transition-all duration-200 group-hover:w-full group-focus:w-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-cyan-400 transition-all duration-200 group-hover:h-full group-focus:h-full"></span>
          Select From Cards
        </button>
      )}
      {random == 0 ? (
        Data.length > 1 && (
          <p className="text-base mt-3">
            Please click the button to show the random Card
          </p>
        )
      ) : (
        <Card index={random} item={Data[random]} />
      )}
      <Footer />
    </div>
  );
};

export default App;
