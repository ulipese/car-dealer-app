"use client";
import Link from "next/link";
import { useCarContext } from "./context/CarContext";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  const { cars, setCars, model, setModel, makeId, setMakeId } = useCarContext();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {(!model || !makeId) && (
        <h1 className="font-bold text-[1.8em] w-[16em] text-center self-center -mt-[5em]">
          Choose the <span className="text-primaryBlue">make</span> and{" "}
          <span className="text-primaryBlue">model</span>, the rest we{" "}
          <span className="text-primaryBlue">make</span>
        </h1>
      )}

      {model && makeId && (
        <>
          <h1 className="font-bold text-[1.8em] w-[16em] text-center self-center -mt-[5em]">
            Good choice, now...
          </h1>
          <Link
            href={`/result/${makeId}/${model}`}
            className="mt-[1em] flex gap-[.3em] font-semibold text-primaryBlue"
          >
            Let's continue?
            <ArrowRightIcon className="text-primaryBlue" />
          </Link>
        </>
      )}
    </div>
  );
}
