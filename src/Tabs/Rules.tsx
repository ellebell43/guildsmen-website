import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faAngleUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Intro from './chapters/Intro';
import CharacterCreation from './chapters/CharacterCreation';
import Skills from './chapters/Skills';
import Combat from './chapters/Combat';
import Myth from './chapters/Myth';
import Craft from './chapters/Craft';
import Invent from './chapters/Invent';
import Market from './chapters/Market';
import Est from './chapters/Est';
import Creatures from './chapters/Creatures';
import GM from './chapters/GM';

const Rules = (props: any) => {
    let [page, setPage] = useState(Intro);

    const toggleContents = () => {
        const contents = document.getElementById('contents');
        if (contents !== null) {
            contents.classList.add('contentsVisible');
        }
    }

    const closeContents = (e: any) => {
        const contents = document.getElementById('contents');
        if (contents !== null) {
            contents.classList.remove('contentsVisible');
        }

        const page = e.target.id;
        console.log(page);
        if (page !== null) {
            switch (page) {
                case 'intro':
                    setPage(Intro);
                    console.log('page set to Introduction');
                    break;
                case 'CC':
                    setPage(CharacterCreation);
                    console.log('page set to Character Creation');
                    break;
                case 'skills':
                    setPage(Skills);
                    break;
                case 'combat':
                    setPage(Combat);
                    break;
                case 'myth':
                    setPage(Myth);
                    break;
                case 'craft':
                    setPage(Craft);
                    break;
                case 'invent':
                    setPage(Invent);
                    break;
                case 'market':
                    setPage(Market);
                    break;
                case 'est':
                    setPage(Est);
                    break;
                case 'creatures':
                    setPage(Creatures);
                    break;
                case 'GM':
                    setPage(GM);
                    break;
                default:
            }
        }
    }

    const toggleCollapse = () => {
        const icon = document.getElementById('collapse');
        const contents = document.getElementById('contents')
        if (icon !== null && contents !== null) {
            if (icon.classList.contains('rotateCollapseIcon')) {
                icon.classList.remove('rotateCollapseIcon');
                icon.classList.add('unrotateCollapseIcon');
                contents.classList.remove('unsinkContents');
                contents.classList.add('sinkContents');
            } else {
                icon.classList.add('rotateCollapseIcon');
                icon.classList.remove('unrotateCollapseIcon');
                contents.classList.add('unsinkContents');
                contents.classList.remove('sinkContents');
            }
        }
    }

    return (
        <main className='rules'>
            <div className="contents" id='contents'>
                <div className='contentsHeader'>
                    <p>Table of Contents</p>
                    <FontAwesomeIcon icon={faXmark} size='2x' onClick={closeContents} id='xMark' className='xMark' />
                    <div className='collapseContainer'>
                        <FontAwesomeIcon icon={faAngleUp} size='2x' onClick={toggleCollapse} id='collapse' className='collapse' />
                    </div>
                </div>
                <ul>
                    <li><a onClick={closeContents} href='#intro' id='intro'>Introduction</a></li>
                    <li><a onClick={closeContents} href='#CC' id='CC'>Character Creation</a></li>
                    <li><a onClick={closeContents} href='#skills' id='skills' >Skills</a></li>
                    <li><a onClick={closeContents} href='#combat' id='combat' >Combat</a></li>
                    <li><a onClick={closeContents} href='#myth' id='myth' >Myth</a></li>
                    <li><a onClick={closeContents} href='#craft' id='craft' >Crafting</a></li>
                    <li><a onClick={closeContents} href='#invent'id='invent' >Invention</a></li>
                    <li><a onClick={closeContents} href='#market' id='market' >The Market</a></li>
                    <li><a onClick={closeContents} href='#est' id='est' >Establishments</a></li>
                    <li><a onClick={closeContents} href='#creatures' id='creatures' >Creatures</a></li>
                    <li><a onClick={closeContents} href='#GM' id='GM' >For the GM</a></li>
                </ul>
            </div>
            <div className='rulesContent'>
                <h1>Core TTRPG Rules</h1>
                {page}
            </div>
            <button type='button' className='contentsButton' onClick={toggleContents}>CONTENTS</button>
            <button type='button' className='navButton'>Prev</button>
            <button type='button' className='navButton'>Next</button>
        </main>
    )
}

export default Rules;