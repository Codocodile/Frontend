import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-b from-gray-900 to-red-600 pl-8 pr-8 pt-4 pb-4">
      <div className="container mx-auto text-center">
        <Typography variant="h5" color="white" className="p-1 font-normal">
          Designed by Ali Salesi
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
