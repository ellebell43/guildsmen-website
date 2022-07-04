import csSheet from '../files/character-sheet.pdf';
import estSheet from '../files/07.5 - Establishment Sheet.pdf';

import downloadIcon from '../images/download-solid.svg';
import warningIcon from '../images/circle-exclamation-solid.svg';

import toTop from '../js/toTop';

import '../css/resources.css';

const Resources = () => {
  return (
    <main>
      <h1>Guildsmen Resources</h1>
      <p>Here you can find all the resources we have available for Guildsmen, such as files, supplemental content, extra mechanics, and campaigns. Currently, the content here is very sparse, but check back often! Anything with a warning icon next to it is a link that doesn't do anything, but is planned to be implemented soon.</p>

      <div className="resourceLinkContainer">
        <a className="resourceLink" href={csSheet} onClick={toTop} download='guildsmen-character-sheet'>
          The Character Sheet
          <img src={downloadIcon} alt="" className="filter" />
        </a>
      </div>

      <div className="resourceLinkContainer">
        <a className="resourceLink" href={estSheet} onClick={toTop} download='guildsmen-establishments-sheet'>
          Establishments Sheet
          <img src={downloadIcon} alt="" className="filter" />
        </a>
      </div>

      <div className="resourceLinkContainer">
        <a className="resourceLink" href='/#/resources' onClick={toTop}>
          Quick Reference Sheet
          <img src={warningIcon} alt="" className="filter" />
        </a>
      </div>
    </main>
  )
}

export default Resources;