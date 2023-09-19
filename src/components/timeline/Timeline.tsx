import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Card,
} from "@material-tailwind/react";

interface TimelineEvent {
  title: string;
  description: string;
}

interface Props {
  events: TimelineEvent[];
}

const EventTimeline = ({ events }: Props) => {
  return (
    <Card
      color="gray"
      className="mx-auto items-center w-[48rem] p-4 bg-gray-600"
    >
      <Timeline>
        {events.map((event, index) => (
          <TimelineItem>
            {index != events.length - 1 && <TimelineConnector />}
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none text-white"
              >
                {event.title}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-gray-200"
              >
                {event.description}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </Card>
  );
};

export default EventTimeline;
