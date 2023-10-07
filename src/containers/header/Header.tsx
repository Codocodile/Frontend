import { Typography } from "@material-tailwind/react";
import Typewriter from "typewriter-effect";
import "./header.css";

const Header = () => {
  return (
    <div className="header-wrapper flex items-center justify-between flex-col">
      <div className="container mx-auto flex items-center justify-between flex-col-reverse lg:flex-row md:mb-8">
        <div className="flex items-center gap-4">
          <Typography
            variant="h1"
            color="white"
            className="p-1 font-normal header-type-writer"
          >
            <Typewriter
              options={{
                strings: [
                  "Learn Algorithmic Vision",
                  "Challenge Your Programming Skills",
                  "Compete With The Best",
                  "Win Exciting Prizes",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <img src="assets/logo-white.png" alt="logo" className="max-w-lg" />
        </div>
      </div>
      <div className="logos flex items-center gap-4">
        <img src="assets/SUTLogo.svg" />
        <img src="assets/SSCLogo.svg" />
        <img src="assets/SnappFoodLogo.png" />
      </div>
    </div>
  );
};

export default Header;
