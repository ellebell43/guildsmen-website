import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from './routes/home';
import Footer from './components/Footer';
import Wip from './routes/wip';
import Rules from './routes/rules';
import CharacterCreation from "./routes/rules/characterCreation";
import Skills from "./routes/rules/skills";
import Combat from "./routes/rules/combat";
import Myth from "./routes/rules/myth";
import Crafting from './routes/rules/crafting';
import Invention from "./routes/rules/invention";
import Market from "./routes/rules/the-market";
import Establishments from "./routes/rules/establishments";
import Creatures from "./routes/rules/creatures";
import ForTheGM from "./routes/rules/forTheGM";
import Bestiary from "./routes/bestiary";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <HashRouter>
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
      <Route path='/rules/combat' element={
        <div>
          <App />
          <Combat />
          <Footer />
        </div>
      } />
      <Route path='/rules/myth' element={
        <div>
          <App />
          <Myth />
          <Footer />
        </div>
      } />
      <Route path='/rules/crafting' element={
        <div>
          <App />
          <Crafting />
          <Footer />
        </div>
      } />
      <Route path='/rules/invention' element={
        <div>
          <App />
          <Invention />
          <Footer />
        </div>
      } />
      <Route path='/rules/the-market' element={
        <div>
          <App />
          <Market />
          <Footer />
        </div>
      } />
      <Route path='/rules/establishments' element={
        <div>
          <App />
          <Establishments />
          <Footer />
        </div>
      } />
      <Route path='/rules/creatures' element={
        <div>
          <App />
          <Creatures />
          <Footer />
        </div>
      } />
      <Route path='/rules/for-the-gm' element={
        <div>
          <App />
          <ForTheGM />
          <Footer />
        </div>
      } />
      <Route path='/bestiary' element={
        <div>
          <App />
          <Bestiary />
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
  </HashRouter>
);