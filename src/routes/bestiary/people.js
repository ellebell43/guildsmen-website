import { Link } from "react-router-dom";
import toTop from "../../js/toTop";
import '../../css/tableOfContents.css';

const People = () => {
  return (
    <main>
      <h1>People</h1>
      <p>Poeple are some of the most common things that you will end up in combat with. Whether it's a brawl, a duel, a mugging, or you're running from the law, people are everywhere, so we've outlined some common people you may get into a fight with to help know what actions, stats, and equipment they would have. None of these people will be <em>significantly</em> more powerful than you, but some will be better equipped, and therefore have the upper hand. And remember: in combat, numbers matter. The largest group generally comes out on top.</p>

      <div className="tableOfContents">
        <Link onClick={toTop} className='contentLink' to="assassin">Assassin</Link>
        <Link onClick={toTop} className='contentLink' to="bandit">Bandit</Link>
        <Link onClick={toTop} className='contentLink' to="police-officer">Police Officer</Link>
        <Link onClick={toTop} className='contentLink' to="police-captain">Police Captain</Link>
        <Link onClick={toTop} className='contentLink' to="honor-guard">Honor Guard</Link>
        <Link onClick={toTop} className='contentLink' to="mercenary">Mercenary</Link>
      </div>
    </main>
  )
}

export default People;