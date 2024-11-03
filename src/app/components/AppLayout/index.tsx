import { Header } from "../Header";

type AppLayout = {
  children: React.ReactNode | React.ReactNode[];
};

export const AppLayout = ({ children }: AppLayout) => {
  return (
    <main className="w-full h-full flex flex-col items-center font-sans">
      <div className="w-full h-full max-w-screen-xl">
        <Header />
        {children}
      </div>
    </main>
  );
};
