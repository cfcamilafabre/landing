import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "../src/components/landing/Landing";
import Error from "../src/components/errorPage/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
