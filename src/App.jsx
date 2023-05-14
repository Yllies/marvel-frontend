import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Characters from "./pages/Characters";
import Header from "./components/Header";
import Comics from "./pages/Comics";
import ComicsWithCharacter from "./pages/ComicsWithCharacter";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:id" element={<ComicsWithCharacter />} />
      </Routes>
    </Router>
  );
}

export default App;
