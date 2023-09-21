import "./App.css";
import Landing from "./components/landing/Landing.tsx";
import {Route, Routes} from "react-router-dom";
import SignIn from "./components/signIn/SignIn.tsx";
import {urls} from "./global/Variables.ts";
import SignUp from "./components/signUp/SignUp.tsx";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={urls.landing} element={<Landing/>}/>
        <Route path={urls.signIn} element={<SignIn/>}/>
        <Route path={urls.signUp} element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
