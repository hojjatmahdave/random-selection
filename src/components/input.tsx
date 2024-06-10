import { ChangeEvent } from "react";

const Input = ({
  value,
  name,
  placeholder,
  handleChangeText,
}: {
  placeholder: string;
  name: string;
  value: string;
  handleChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => handleChangeText(e)}
      type="text"
      className="my-5 w-11/12 h-20 p-3 bg-white font-sans text-2xl rounded-lg border-4 border-solid border-blue-300 focus:border-blue-500 outline-none text-black "
    />
  );
};

export default Input;
