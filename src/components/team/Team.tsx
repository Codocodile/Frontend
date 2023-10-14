import { Section } from "../../containers";
import { Typography } from "@material-tailwind/react";

const Team = () => {
  return (
    <Section name="Team" side="left" dino={Math.floor(Math.random() * 15)}>
      <>
        <Typography type="h1" className="text-white">Coming Soon!</Typography>
      </>
    </Section>
  );
};

export default Team;
