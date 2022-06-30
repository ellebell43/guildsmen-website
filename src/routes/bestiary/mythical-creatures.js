import { Link } from "react-router-dom";
import toTop from "../../js/toTop";
import '../../css/tableOfContents.css';

const MythicalCreatures = () => {
  return (
    <main>
      <h1>Mythical Creatures</h1>
      <p>Mythcial creatures are creatures that have Navidus Crystals inside of them. They are inheritly magical and can be extremely dangerous. The danger of Mythical creatures lies in their insatiable hunger. A Mythical creature uses the energy from a Navidus Crystal the same way common creatures use calories - they use it to move and act. But with Navidus Energy, the body deteriorates much faster than normal, so a Mythical creature must eat constantly to replenish their bodies.</p>

      <p>Not only that, but the Navidus Crystal inside them never stops growing. Because of this, Mythical creatures must constantly eat in order for their bodies to be able to grow to accomidate the crystal. So, the older the Mythical creature, the larger they are. The larger they are, the more food they need.</p>

      <p>At a certain point, Mythcial creatures will become so large, their bodies cannot be sustained. When this happens, a Mythcial creature becomes ravenous. This is when they are most dangerous. The creature will focus on eating whatever crosses it's path, because if it does not eat, it will die. So, all instinct of survival and self preservation are overridden by an insatiable hunger. When encoutering a ravenous Mythical creature, it is best to leave the area as quickly and quietly as possible, or face the hunger of a nearly unstoppable force.</p>

      <div className="tableOfContents">
        <Link className='contentLink' onClick={toTop} to='abominable-ram'>Abominable Ram</Link>
        <Link className='contentLink' onClick={toTop} to='cerberus'>Cerberus</Link>
        <Link className='contentLink' onClick={toTop} to='death-worm'>Death Worm</Link>
        <Link className='contentLink' onClick={toTop} to='forest-hexadecapod'>Forest Hexadecapod</Link>
        <Link className='contentLink' onClick={toTop} to='launcher-beast'>Launcher Beast</Link>
        <Link className='contentLink' onClick={toTop} to='manticore'>Manticore</Link>
        <Link className='contentLink' onClick={toTop} to='dragon'>Dragon</Link>
      </div>
    </main>
  )
}

export default MythicalCreatures;