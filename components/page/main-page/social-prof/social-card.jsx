import { AiOutlineRise } from "react-icons/ai";
export function Card(props) {
  return (
    <div className="relative flex flex-col items-center rounded-xs border bg-boost-dark px-2 py-4 shadow-sm shadow-boost-neutral md:items-start md:px-10 md:py-8">
      <div className="mb-2 text-3xl font-extrabold text-boost-light md:text-4xl">
        {props.number}
      </div>
      <div className="text-center font-medium text-boost-light opacity-80 md:text-left">
        {props.type}
      </div>
      <div className="absolute -top-8 right-2 h-auto w-12 -rotate-6 rounded-xs border-4 border-boost-green bg-boost-dark shadow-sm sm:w-14 md:w-20 lg:-top-14">
        <AiOutlineRise className="h-full w-full p-2 text-boost-green" />
      </div>
    </div>
  );
}
