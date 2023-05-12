import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import Characters from "./pages/Characters";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </Router>
  );
}

export default App;
