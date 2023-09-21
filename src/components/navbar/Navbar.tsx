import { useState, useEffect } from "react";
import {
  Navbar as NavbarComponent,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import {urls} from "../../global/Variables.ts";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#timeline" className="flex items-center">
          Timeline
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#staff" className="flex items-center">
          Staff
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          FAQ
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Sponsers
        </a>
      </Typography>
    </ul>
  );

  return (
    <NavbarComponent
      variant="gradient"
      color="green"
      className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 from-green-100 to-green-300"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center gap-4">
          <Avatar src="assets/logo.png" size="lg" />
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-large font-bold"
          >
            Codocodile
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <Button
            variant="outlined"
            size="sm"
            className="hidden lg:inline-block"
            onClick={() => navigate(urls.signIn)}
          >
            <span>Sign In</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
            onClick={() => navigate(urls.signUp)}
          >
            <span>Sign Up</span>
          </Button>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="outlined" size="sm" fullWidth className="mb-2">
          <span>Sign In</span>
        </Button>
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Sign Up</span>
        </Button>
      </MobileNav>
    </NavbarComponent>
  );
};

export default Navbar;
