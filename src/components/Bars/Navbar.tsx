import { IconHexagon3d } from "@tabler/icons-react";

export const Navbar = () => {
  return (
    <div className="fixed w-screen px-10 py-5 flex bg-gradient-to-br from-slate-200 via-purple-300 to-slate-400 z-10 items-center justify-between">
      <IconHexagon3d color="#8261ae" size="32" />
      <h1 className="text-3xl font-bold text-[#8261ae]">AlgoRank</h1>
    </div>
  );
};
