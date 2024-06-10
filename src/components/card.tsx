import { FaTelegram } from "react-icons/fa";

type Props = {
  index: number;
  item: {
    name: string;
    stack: string;
    position: string;
    telegramId: string;
    image: string;
  };
};

const Card = ({ index, item }: Props) => {
  return (
    <section
      key={index}
      className="rounded-xl shadow-xl p-4 m-4 bg-gradient-to-r from-blue-800 to-indigo-900 w-96 flex flex-row items-center hover:scale-105 transition-all border-2 border-solid border-blue-500 hover:border-blue-400 hover:from-indigo-900 hover:to-blue-800 cursor-pointer"
    >
      <p
        className={`self-start bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center text-4xl text-blue-100  border-2 border-solid border-cyan-300`}
      >
        {item.name[0]}{" "}
      </p>

      <div className="flex flex-col justify-center font-mono ml-4">
        <h2 className="text-xl"> {item.name}</h2>
        <p>Stack: {item.stack}</p>
        <p>Position: {item.position}</p>
        <div className="flex flex-row items-center">
          <FaTelegram size={14} />
          <p className="text-xs ml-2">{item.telegramId}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
