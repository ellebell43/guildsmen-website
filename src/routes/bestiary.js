import { Link } from "react-router-dom";
import toTop from "../js/toTop";
import '../css/rules.css';
import wandIcon from '../images/wand-magic-sparkles-solid.svg';
import personIcon from '../images/person-solid.svg';
import pawIcon from '../images/paw-solid.svg';

const Bestiary = () => {
  return (
    <main>
      <h1>The Bestiary</h1>
      <p>The world of Guildsmen has a wide variety of creatures to interact with, and the creatures outlined in the following sections are shown with stats and abilities to enhance your options for encounters and combat situations. These creatures fall into 3 distinct categories: people, beasts, and mythical.</p>

      <p>People are.. well.. people. We include them here to give quick references to stats and abilities of common types of people you might end up in combat with. Beasts are normal everyday animals that would pose a danger to players. This includes bears, sharks, and wolves. Mythical creatures are special, magic creatures that pose a significant threat. All of them have magical abilities and have a Navidus Crystal somewhere inside of them. </p>
      <div className="tableOfContents">
        <Link onClick={toTop} to="/bestiary/mythical-creatures" className="contentLink">
          <img src={wandIcon} alt="" className="filter" />
          Mythical Creatures
        </Link>
        <Link onClick={toTop} to="/bestiary/people" className="contentLink">
          <img src={personIcon} alt="" className="filter" />
          People
        </Link>
        <Link onClick={toTop} to="/bestiary/beasts" className="contentLink">
          <img src={pawIcon} alt="" className="filter" />
          Beasts
        </Link>
      </div>
    </main>
  )
}

export default Bestiary;