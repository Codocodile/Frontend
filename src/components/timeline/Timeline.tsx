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
import {
  HomeIcon,
  BellIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

const EventTimeline = () => {
  return (
    <div id="timeline" className="flex items-center justify-between bg-gray-900 pt-8">
      <div className="container text-center mx-auto">
        <Typography variant="h1" color="white" className="text-white">
          Timeline
        </Typography>
        <Card
          color="gray"
          className="mx-auto items-center w-[48rem] p-4 bg-gray-700"
        >
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon
                  className="p-2 font-normal text-gray-100"
                  color="gray"
                >
                  <HomeIcon className="h-4 w-4" />
                </TimelineIcon>
                <Typography
                  variant="h5"
                  color="gray"
                  className="font-normal text-gray-100"
                >
                  Timeline Title Here.
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography color="gray" className="font-normal text-gray-300">
                  The key to more success is to have a lot of pillows. Put it
                  this way, it took me twenty five years to get these plants,
                  twenty five years of blood sweat and tears, and I&apos;m never
                  giving up, I&apos;m just getting started. I&apos;m up to
                  something. Fan luv.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon
                  className="p-2 font-normal text-gray-100"
                  color="gray"
                >
                  <BellIcon className="h-4 w-4" />
                </TimelineIcon>
                <Typography
                  variant="h5"
                  color="gray"
                  className="font-normal text-gray-100"
                >
                  Timeline Title Here.
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography color="gray" className="font-normal text-gray-300">
                  The key to more success is to have a lot of pillows. Put it
                  this way, it took me twenty five years to get these plants,
                  twenty five years of blood sweat and tears, and I&apos;m never
                  giving up, I&apos;m just getting started. I&apos;m up to
                  something. Fan luv.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineHeader>
                <TimelineIcon
                  className="p-2 font-normal text-gray-100"
                  color="gray"
                >
                  <CurrencyDollarIcon className="h-4 w-4" />
                </TimelineIcon>
                <Typography
                  variant="h5"
                  color="gray"
                  className="font-normal text-gray-100"
                >
                  Timeline Title Here.
                </Typography>
              </TimelineHeader>
              <TimelineBody>
                <Typography color="gray" className="font-normal text-gray-300">
                  The key to more success is to have a lot of pillows. Put it
                  this way, it took me twenty five years to get these plants,
                  twenty five years of blood sweat and tears, and I&apos;m never
                  giving up, I&apos;m just getting started. I&apos;m up to
                  something. Fan luv.
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </Card>
      </div>
    </div>
  );
};

export default EventTimeline;
