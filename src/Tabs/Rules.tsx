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
import './tab-styles/Rules.css';

const Rules = (props: any) => {
    const pageArr = [Intro, CharacterCreation, Skills, Combat, Myth, Craft, Invent, Market, Est, Creatures, GM];
    let [page, setPage] = useState(Intro);
    let [index, setIndex] = useState(0);

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
        if (page !== null) {
            switch (page) {
                case 'intro':
                    setPage(Intro);
                    setIndex(0);
                    break;
                case 'CC':
                    setPage(CharacterCreation);
                    setIndex(1);
                    break;
                case 'skills':
                    setPage(Skills);
                    setIndex(2);
                    break;
                case 'combat':
                    setPage(Combat);
                    setIndex(3);
                    break;
                case 'myth':
                    setPage(Myth);
                    setIndex(4);
                    break;
                case 'craft':
                    setPage(Craft);
                    setIndex(5);
                    break;
                case 'invent':
                    setPage(Invent);
                    setIndex(6);
                    break;
                case 'market':
                    setPage(Market);
                    setIndex(7);
                    break;
                case 'est':
                    setPage(Est);
                    setIndex(8);
                    break;
                case 'creatures':
                    setPage(Creatures);
                    setIndex(9);
                    break;
                case 'GM':
                    setPage(GM);
                    setIndex(10);
                    break;
                default:
            }
        }
        toggleCollapse();
        goToTop();
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

    const nextPage = () => {
        const warning = document.getElementById('warning');
        if (index !== pageArr.length - 1) {
            setIndex(index + 1);
            setPage(pageArr[index + 1]);
            warning?.classList.remove('warningShow')
            goToTop();
        } else {
            warning?.classList.add('warningShow')
        }
    }

    const prevPage = () => {
        const warning = document.getElementById('warning');
        if (index !== 0) {
            setIndex(index - 1);
            setPage(pageArr[index - 1]);
            warning?.classList.remove('warningShow')
            goToTop();
        } else {
            warning?.classList.add('warningShow')
        }
    }

    const goToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <main className='rules'>
            <div className="contents" id='contents'>
                <div className='contentsHeader'>
                    <p>Table of Contents</p>
                    <div className='collapseContainer'>
                        <FontAwesomeIcon icon={faXmark} size='2x' onClick={closeContents} id='xMark' className='xMark' />
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
                    <li><a onClick={closeContents} href='#invent' id='invent' >Invention</a></li>
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
            <div className='rulesNavContainer'>
                <button type='button' className='rulesNav' onClick={prevPage}>Prev</button>
                <button type='button' className='rulesNav' onClick={nextPage}>Next</button>
            </div>
            <p className='warning' id='warning'>There isn't anything off that way.<br />Turn back before it's too late!</p>
        </main>
    )
}

export default Rules;