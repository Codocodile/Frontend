import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-b from-gray-900 to-emerald-600 pl-8 pr-8 pt-8 pb-4">
      <div className="container mx-auto text-center">
        <Typography variant="h5" color="white" className="p-1 font-normal">
          © Codocodile 2023
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
