import { Typography } from "@material-tailwind/react";

interface Props {
  name: string;
  capitalize?: boolean;
  children: React.ReactNode;
  side?: "left" | "right";
  dino?: number;
}

function titleCase(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
}

function slugify(str: string) {
  return str.toLowerCase().split(" ").join("-");
}

const Section = (props: Props) => {
  return (
    <div id={slugify(props.name)} className="flex bg-gray-900 pt-8">
      <div className="flex items-center justify-between mx-auto text-center">
        <img
          src={"assets/crocs/" + props.dino + ".png"}
          width={416}
          height={320}
          className={(props.side == "left" ? "block" : "hidden") + " mr-40"}
        />
        <div className="container w-[48rem] mx-auto text-center">
          <Typography
            variant="h1"
            color="white"
            className="text-white mb-6 mt-6"
          >
            {props.capitalize
              ? props.name.toUpperCase()
              : titleCase(props.name)}
          </Typography>
          {props.children}
        </div>
        <img
          src={"assets/crocs/" + props.dino + ".png"}
          width={416}
          height={320}
          className={(props.side == "right" ? "block" : "hidden") + " ml-40"}
        />
      </div>
    </div>
  );
};

export default Section;
