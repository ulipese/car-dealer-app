import { generateStaticParams } from "@/app/utils/staticGenerateParams";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { CarCard } from "./components/CarCard";

type ResultPageProps = {
  params: {
    makeId: string;
    year: string;
  };
};

type CarType = {
  Model_Name: string;
  Make_Name: string;
};

export default async function Page({ params }: ResultPageProps) {
  const { data } = await axios.get(
    `${process.env.NEXT_APP_GET_VEHICLE_DATA_API}/makeId/${params.makeId}/modelyear/${params.year}?format=json`
  );

  console.log(data);

  return (
    <div className="w-full h-full flex flex-col relative">
      <h1 className="font-bold text-[1.8em] w-full text-center mt-[2em]">
        Here some <span className="text-primaryBlue">cars</span> based on{" "}
        <span className="text-primaryBlue">your choice</span>
      </h1>

      <div className="flex flex-row items-center flex-wrap w-full h-[80vh] mt-[1em] gap-[.5em] overflow-y-auto">
        {data?.Results.map((car: CarType, index: number) => {
          return (
            <CarCard
              modelName={car.Model_Name}
              makeName={car.Make_Name}
              year={params.year}
            />
          );
        })}
      </div>

      <Link
        href={`/`}
        className="mt-[1em] flex gap-[.3em] font-semibold text-primaryBlue left-[1em] bottom-[5em] mt-[1em] mb-[2em]"
      >
        <ArrowLeftIcon className="text-primaryBlue" />
        Do you want to go back?
      </Link>
    </div>
  );
}

generateStaticParams();
