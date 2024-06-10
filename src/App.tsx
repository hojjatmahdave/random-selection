import { useState } from "react";
import Footer from "./components/footer";
import data from "./constants/raw";
import Card from "./components/card";
const App = () => {
  const [random, setRandom] = useState(0);
  const randomNumber = () => {
    const randomNum = Math.floor(Math.random() * 13) + 1;
    setRandom(randomNum);
  };

  return (
    <div className="flex flex-col items-center justify-start bg-gradient-to-tr pt-20 pl-32 pr-32 pb-5 text-white from-violet-600 to-indigo-600 h-full w-full">
      <header>
        <h1 className="font-mono text-5xl">Random Selector</h1>
      </header>
      <main className="grid grid-cols-4 gap-2 my-10">
        {data.map((item, index) => {
          return <Card index={index} item={item} key={index} />;
        })}
      </main>
      <button
        onClick={randomNumber}
        type="button"
        className="group relative inline-block overflow-hidden text-lg  border-gray-100 w-52 h-16  font-medium  hover:text-cyan-400 focus:outline-none   font-mono bg-black outline-none text-white rounded shadow-sm hover:shadow-lg  hover:scale-105 transition-all duration-200 "
      >
        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-cyan-400 transition-all duration-200 group-hover:w-full"></span>
        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-cyan-400 transition-all duration-200 group-hover:h-full"></span>
        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-cyan-400 transition-all duration-200 group-hover:w-full"></span>
        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-cyan-400 transition-all duration-200 group-hover:h-full"></span>
        Select From Cards
      </button>
      {random == 0 ? (
        <p className="text-base mt-3">
          Please click the button to show the random Card
        </p>
      ) : (
        <Card index={random} item={data[random - 1]} />
      )}
      <Footer />
    </div>
  );
};

export default App;
