import { Header } from "../Header";
import { Footer } from "../Footer";
import { CarProvider } from "@/app/context/CarContext";

type AppLayout = {
  children: React.ReactNode | React.ReactNode[];
};

export const AppLayout = ({ children }: AppLayout) => {
  return (
    <CarProvider>
      <main className="w-full h-full flex flex-col items-center ">
        <div className="w-full h-full max-w-screen-xl">
          <Header />
          <div className="w-full h-full px-[2em]">{children}</div>
          <Footer />
        </div>
      </main>
    </CarProvider>
  );
};
