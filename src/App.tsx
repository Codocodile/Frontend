import "./App.css";
import { Header, Section } from "./containers";
import { Navbar, EventTimeline, StaffCarousel, FAQ } from "./components";

var timeline = [
  {
    title: "Registration",
    description: "Registration will be open from 1st of August to 1st of September.",
  },
  {
    title: "First Round",
    description: "The first round will be held on 10th of September.",
  },
  {
    title: "Second Round",
    description: "The second round will be held on 17th of September.",
  },
  {
    title: "Final Round",
    description: "The final round will be held on 24th of September.",
  },
]

var staff = [
  {
    name: "Ali Salesi",
    title: "Head of Technical",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ali Shahali",
    title: "Head of Event",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Emad Emam Jome",
    title: "Head of Social",
    image: "https://via.placeholder.com/150",
  },
];

var faq = [
  {
    question: "What is this event?",
    answer: "This event is a coding competition for high school and university students. \
    The competition will be held in two rounds. The first round is a 3-hour online \
    competition and the second round is a 6-hour  on-site competition. The competition \
    will be held in three categories: high school, university beginner and university advanced."
  },
  {
    question: "Is there a registration fee?",
    answer: "No, there is no registration fee.",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section name="timeline">
        <EventTimeline events={timeline} />
      </Section>
      <Section name="staff">
        <StaffCarousel staff={staff} />
      </Section>
      <Section name="FAQ" capitalize={true}>
        <FAQ data={faq}/>
      </Section>
    </div>
  );
}

export default App;
