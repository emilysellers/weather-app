import React from "react";
import { MdLocationPin, MdOutlineMyLocation, MdWbSunny } from "react-icons/md";
import SearchBox from "./SearchBox";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7x1 px-3 mx-auto">
        <p className="flex items-center justify-center gap-2">
          <h2 className="text-gray-500 text-3xl">Weather</h2>
          <MdWbSunny className="text-3xl mt-1 text-yellow-300" />
        </p>
        <section className="flex gap-2 items-center">
          <MdOutlineMyLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
          <MdLocationPin className="text-3xl text-gray-400 cursor-pointer" />
          <p className="text-slate-900/80 text-sm">Portland</p>
        </section>
        <section>
          <div>
            <SearchBox />
          </div>
        </section>
      </div>
    </nav>
  );
}
