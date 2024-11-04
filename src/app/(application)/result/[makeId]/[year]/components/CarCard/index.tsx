interface CarCardProps {
  modelName: String;
  makeName: String;
  year: String;
}

export const CarCard = ({ modelName, makeName, year }: CarCardProps) => {
  return (
    <div className="w-[8em] h-[12em] bg-primaryBlue flex flex-col justify-end p-[.5em] rounded relative">
      <p className="absolute right-[.5em] top-[.5em] font-semibold">{year}</p>
      <p className="font-bold">{makeName.length > 8 ? makeName.substring(0, 5) + "..." : makeName}</p>
      <h2>
        {modelName.length > 10 ? modelName.substring(0, 7) + "..." : modelName}
      </h2>
    </div>
  );
};
