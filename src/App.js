import "./App.css";
import Main from "./components/Main ";
import Homee from "./components/Homee";
import TableFetch from "./components/TableFetch";
import CardAxios from "./components/CardAxios";
import { Route, Routes } from "react-router-dom";
import Register from "./components/screens/Register";
import Loginpage from "./components/screens/Loginpage";
import Singleproduct from "./components/Singleproduct";
import Contactus from "./components/Contactus";
import About from "./components/About";
import Footer from "./components/Footer";
import Testdrive from "./components/Testdrive";

function App() {
  return (
    <>
      <Main />
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/table" element={<TableFetch />} />
        <Route path="/card" element={<CardAxios />} />
        <Route path="/card/:id" element={<Singleproduct />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/about" element={<About />} />
        <Route index path="/register" element={<Register />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/Testdrive" element={<Testdrive />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
