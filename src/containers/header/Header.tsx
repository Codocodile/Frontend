import { Typography } from "@material-tailwind/react";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-b from-red-900 to-gray-900 pl-8 pr-8 pt-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Typography variant="h1" color="white" className="p-1 font-normal">
            Fight Shahali for the Crocodiles
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <img src="assets/croc.png" alt="logo" className="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
