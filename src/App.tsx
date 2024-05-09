import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InputName from "./pages/InputName";
import Poker from "./pages/Poker";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<InputName />}/>
          <Route path="/poker" element={<Poker />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
