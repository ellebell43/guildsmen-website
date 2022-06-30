import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
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
import MythicalCreatures from "./routes/bestiary/mythical-creatures";
import Beasts from "./routes/bestiary/beasts";
import People from "./routes/bestiary/people";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <HashRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path='/rules' element={<Rules />} />
      <Route path='/rules/character-creation' element={<CharacterCreation />} />
      <Route path='/rules/skills' element={<Skills />} />
      <Route path='/rules/combat' element={<Combat />} />
      <Route path='/rules/myth' element={<Myth />} />
      <Route path='/rules/crafting' element={<Crafting />} />
      <Route path='/rules/invention' element={<Invention />} />
      <Route path='/rules/the-market' element={<Market />} />
      <Route path='/rules/establishments' element={<Establishments />} />
      <Route path='/rules/creatures' element={<Creatures />} />
      <Route path='/rules/for-the-gm' element={<ForTheGM />} />

      <Route path='/bestiary' element={<Bestiary />} />
      <Route path='/bestiary/people' element={<People />} />
      <Route path='/bestiary/beasts' element={<Beasts />} />
      <Route path='/bestiary/mythical-creatures' element={<MythicalCreatures />} />

      <Route path="*" element={<Wip />} />
    </Routes>
    <Footer />
  </HashRouter>
);