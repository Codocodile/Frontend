import "./App.css";
import Landing from "./components/landing/Landing.tsx";
import Panel from "./components/panel/Panel.tsx";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/signIn/SignIn.tsx";
import { urls } from "./global/Variables.ts";
import SignUp from "./components/signUp/SignUp.tsx";
import Profile from "./components/profile/Profile.tsx";
import Team from "./components/team/Team.tsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Landing />} />
        <Route path={urls.signIn} element={<SignIn />} />
        <Route path={urls.signUp} element={<SignUp />} />
        <Route path={urls.panel} element={<Panel />}>
          <Route path="profile" element={<Profile />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
