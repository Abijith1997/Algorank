import { IconHexagon3d } from "@tabler/icons-react";

export const Navbar = () => {
  return (
    <div className="fixed w-screen px-10 py-5 flex shadow-xl bg-primary-contrast z-10 items-center justify-between">
      <IconHexagon3d color="black" size="32" />
      <h1 className="text-3xl font-bold text-black">AlgoRank</h1>
    </div>
  );
};
