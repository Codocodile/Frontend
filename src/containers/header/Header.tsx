import { Typography } from "@material-tailwind/react";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-b from-emerald-500 to-white-900 pl-8 pr-8 pt-4">
      <div className="container mx-auto flex items-center justify-between flex-col-reverse lg:flex-row md:mb-8">
        <div className="flex items-center gap-4">
          <Typography variant="h1" color="gray" className="p-1 font-normal">
            Fight with your codes!
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <img src="assets/main-croc.png" alt="logo" className="max-w-lg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
