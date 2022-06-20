import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactUs from "./pages/ContactUs";
import FrozenBeef from "./pages/FrozenBeef";
import FrozenChicken from "./pages/FrozenChicken";
import FrozenMutton from "./pages/FrozenMutton";
import Home from "./pages/Home"; 

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frozen-chicken" element={<FrozenChicken />} />
          <Route path="/frozen-beef" element={<FrozenBeef />} />
          <Route path="/frozen-mutton" element={<FrozenMutton />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
