"use client";

import axios from "axios";

type FetchCarsType = {
  model?: string;
  makeId?: string;
};

export const fetchCars = async ({ model, makeId }: FetchCarsType) => {
  if (!model || !makeId) {
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`;
    const req = await axios.get(url);
    return req.data;
  }
};
