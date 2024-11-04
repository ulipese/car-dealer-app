"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type CarType = {
  MakeId: string;
  MakeName: string;
};
interface CarContextProps {
  cars: CarType[] | undefined;
  model: string | undefined;
  makeId: string | undefined;
  setCars: React.Dispatch<React.SetStateAction<CarType[] | undefined>>;
  setModel: React.Dispatch<React.SetStateAction<string | undefined>>;
  setMakeId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const CarContext = createContext<CarContextProps | undefined>(undefined);

export const CarProvider = ({ children }: { children: ReactNode }) => {
  const [cars, setCars] = useState<CarType[] | undefined>(undefined);
  const [model, setModel] = useState<string | undefined>();
  const [makeId, setMakeId] = useState<string | undefined>();

  return (
    <CarContext.Provider
      value={{ cars, model, makeId, setCars, setModel, setMakeId }}
    >
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error("useCarContext must be used within a CarProvider");
  }
  return context;
};
