import "./App.css";
import { Header } from "./containers";
import { Navbar, EventTimeline, StaffCarousel } from "./components";

function App() {
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

  return (
    <div className="App">
      <Navbar />
      <Header />
      <EventTimeline />
      <StaffCarousel staff={staff} />
    </div>
  );
}

export default App;
