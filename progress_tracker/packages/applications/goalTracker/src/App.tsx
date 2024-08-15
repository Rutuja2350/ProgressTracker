import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Dashboard from "./components/pages/dashboard";
import TimeTracker from "./components/pages/timeTracker";
import Motivation from "./components/pages/getMotivated";
import MyProfile from "./components/pages/myProfile";
import Timer from "./components/pages/timer";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/timeTracker" element={<TimeTracker />} />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
