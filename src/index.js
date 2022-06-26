import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from './routes/home';
import Footer from './components/Footer';
import Wip from './routes/wip';
import Rules from './routes/rules';
import CharacterCreation from "./routes/rules/characterCreation";
import Skills from "./routes/rules/skills";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <div>
          <App />
          <Home />
          <Footer />
        </div>
      } />
      <Route path='/rules' element={
        <div>
          <App />
          <Rules />
          <Footer />
        </div>
      } />
      <Route path='/rules/character-creation' element={
        <div>
          <App />
          <CharacterCreation />
          <Footer />
        </div>
      } />
      <Route path='/rules/skills' element={
        <div>
          <App />
          <Skills />
          <Footer />
        </div>
      } />
      <Route
        path="*"
        element={
          <div>
            <App />
            <Wip />
            <Footer />
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
);