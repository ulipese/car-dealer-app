"use client";

import {
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { fetchCars } from "@/app/utils/fetchCars";
import { useEffect, useState } from "react";
import { useCarContext } from "@/app/context/CarContext";
import { usePathname } from "next/navigation";

type CarType = {
  MakeId: string;
  MakeName: string;
};

export const Header = () => {
  const actualYear = new Date().getFullYear();
  const { cars, setCars, model, setModel, makeId, setMakeId } = useCarContext();
  const pathname = usePathname();

  useEffect(() => {
    fetchCars({}).then((data) => {
      setCars(data?.Results);
    });
  }, []);

  let olderYear = actualYear - 9;
  const dropDownsModelYears = [];

  while (olderYear <= actualYear) {
    dropDownsModelYears.push(
      <DropdownMenuRadioItem
        key={"model-" + olderYear.toString()}
        value={olderYear.toString()}
      >
        {olderYear}
      </DropdownMenuRadioItem>
    );

    olderYear += 1;
  }

  return (
    <header className="w-full h-[4em] flex flex-row justify-between items-center px-[2em]">
      <h1 className="text-primaryBlack font-bold text-[1.5em]">
        <span className="text-primaryBlue">Ur</span>Car
      </h1>

      <div className="flex gap-[1em]">
        <DropdownMenu>
          <DropdownMenuTrigger className="font-bold flex items-center">
            <ChevronDown /> Make
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup
              value={makeId}
              onValueChange={(value: string) => {
                setMakeId(value);
              }}
              className="max-h-[8em] overflow-y-auto"
            >
              {cars?.map((car: CarType, index: number) => {
                return (
                  <DropdownMenuRadioItem
                    key={"car-" + index}
                    value={car.MakeId}
                  >
                    {car.MakeName}
                  </DropdownMenuRadioItem>
                );
              })}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="font-bold flex items-center">
            <ChevronDown /> Model
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup
              value={model?.toString()}
              onValueChange={(value: string) => {
                setModel(value);
              }}
              className="max-h-[8em] overflow-y-auto"
            >
              {dropDownsModelYears}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
