import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Rules = () => {
    const toggleContents = () => {
        const contents = document.getElementById('contents');
        if(contents !== null) {
            contents.classList.add('contentsVisible');
        }
    }

    const closeContents = () => {
        console.log('close clicked');
        const contents = document.getElementById('contents');
        if(contents !== null) {
            contents.classList.remove('contentsVisible');
        }
    }

    return (
        <main className='rules'>
            <div className="contents" id='contents'>
                <div className='contentsHeader'>
                    <p>Table of Contents</p>
                    <FontAwesomeIcon icon={faXmark} size='2x' onClick={closeContents} id='xMark' />
                </div>
            </div>
            <h1>Rules Tab :)</h1>
            <button type='button' className='contentsButton' onClick={toggleContents}>CONTENTS</button>
        </main>
    )
}

export default Rules;