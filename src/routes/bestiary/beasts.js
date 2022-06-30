import { Link } from "react-router-dom";
import toTop from "../../js/toTop";
import '../../css/tableOfContents.css';

const Beasts = () => {
  return (
    <main>
      <h1>Beasts</h1>
      <p>Beasts are common, naturally occurring creatures that you would easily find in the wilds such as bears, wolves, and elephants. They are generally much more powerful than common people but will always do whatever they can to ensure their survival. You cannot expect a beast to fight to the death unless cornered or somehow enraged. Many beasts are peaceful and will not attack unless greatly provoked, and even then, they will attack warningly at first, instead of trying to kill.</p>

      <div className="tableOfContents">
        <Link onClick={toTop} className='contentLink' to="crocodile">Crocodile</Link>
        <Link onClick={toTop} className='contentLink' to="grizzly-bear">Grizzly Bear</Link>
        <Link onClick={toTop} className='contentLink' to="dire-bear">Dire Bear</Link>
        <Link onClick={toTop} className='contentLink' to="hippo">Hippo</Link>
        <Link onClick={toTop} className='contentLink' to="lion">Lion</Link>
        <Link onClick={toTop} className='contentLink' to="mountain-lion">Mountain Lion</Link>
        <Link onClick={toTop} className='contentLink' to="shark">Shark</Link>
        <Link onClick={toTop} className='contentLink' to="wolf">Wolf</Link>
        <Link onClick={toTop} className='contentLink' to="dire-wolf">Dire Wolf</Link>
      </div>
    </main>
  )
}

export default Beasts;