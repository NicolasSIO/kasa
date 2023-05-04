import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/pages/layout/Layout";
import Home from "@/pages/home/Home";
import About from "@/pages/about/About";
import Logement from "@/pages/logement/Logement";
import Error from "@/pages/error/Error";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/accueil" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/logement/:id" element={<Logement />} />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
