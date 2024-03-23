"use client"

import useCaseCalls from "@/hooks/useCaseCalls";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Main = () => {
  const { cases } = useSelector((state) => state.case);

  const { getCases } = useCaseCalls();

  useEffect(() => {
    getCases();
  }, []);

  return (
    <div className="w-full bg-[#f3f6fd]">
      <div className="m-8">
        <h1 className="text-blue-main font-bold text-2xl">Frontend Case</h1>
      </div>

      <div className="m-8">
        <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
          <button className="inline-block border px-4 py-2 text-sm font-bold text-blue-main hover:bg-gray-50 focus:relative">
            Boards
          </button>

          <button className="inline-block border px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:relative">
            List
          </button>

          {[0, 1, 2, 3, 4].map((item) => (
            <button
              key={item}
              className="inline-block border px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:relative"
            >
              Other
            </button>
          ))}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
        {cases.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Main;
