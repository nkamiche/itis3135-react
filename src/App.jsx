import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Contract from "./pages/Contract";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter basename="/itis3135-react">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="contract" element={<Contract />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
