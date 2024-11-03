import { generateStaticParams } from "@/app/utils/staticGenerateParams";

type ResultPageProps = {
  params: {
    makeId: string;
    year: string;
  };
};

export default function Page({ params }: ResultPageProps) {
  return (
    <>
      <p>
        The make is {params.makeId}, and the year is {params.year}
      </p>
    </>
  );
}

generateStaticParams();
