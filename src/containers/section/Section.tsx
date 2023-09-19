import { Typography } from "@material-tailwind/react";

interface Props {
  name: string;
  capitalize?: boolean;
  children: React.ReactNode;
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
    <div id={slugify(props.name)} className="bg-gray-900 pt-8">
      <div className="container w-[48rem] mx-auto text-center">
        <Typography variant="h1" color="white" className="text-white">
          {props.capitalize ? props.name.toUpperCase() : titleCase(props.name)}
        </Typography>
        {props.children}
      </div>
    </div>
  );
};

export default Section;
