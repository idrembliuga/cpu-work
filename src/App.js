import "./App.scss";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Support, Home, Marketing, Design, AppDev, Contact } from "./pages";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/design" element={<Design />} />
          <Route path="/application-development" element={<AppDev />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
