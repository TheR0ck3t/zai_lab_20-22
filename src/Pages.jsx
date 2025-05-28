import { Routes, Route } from "react-router-dom";
import Sets from "./pages/Sets.jsx";
import Parts from "./pages/Parts.jsx";
import Help from "./pages/Help.jsx";
import Intro from "./pages/Intro.jsx";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/sets" element={<Sets />} />
      <Route path="/parts" element={<Parts />} />
      <Route path="/help" element={<Help />} />
      {/* więcej tras tutaj */}
    </Routes>
  );
}
