export async function generateStaticParams(): Promise<
  { makeId: string; year: string }[]
> {
  // const cars = await fetchCars();
  // return cars.flatMap((car) =>
  //   car.map((year) => ({
  //     makeId: makeId.toString(),
  //     year: year.toString(),
  //   }))
  // );
  return [{ makeId: "", year: "" }];
}
