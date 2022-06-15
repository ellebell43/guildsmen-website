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
                <ul>
                    <li><a href='#intro'>Introduction</a></li>
                    <li><a href='#CC'>Character Creation</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#combat'>Combat</a></li>
                    <li><a href='#myth'>Myth</a></li>
                    <li><a href='#craft'>Crafting</a></li>
                    <li><a href='#invent'>Invention</a></li>
                    <li><a href='#market'>The Market</a></li>
                    <li><a href='#est'>Establishments</a></li>
                    <li><a href='#creatures'>Creatures</a></li>
                    <li><a href='#GM'>For the GM</a></li>
                </ul>
            </div>
            <h1>Core TTRPG Rules</h1>
            <h2 id='intro'>Introduction</h2>
            <h3>This Game</h3>
            <p>Welcome to Guildsmen! A steampunk-esque, pen and paper, roleplaying game. Here, you will create a character and interact with the fantastic world of Thelius. This game is a “theater of the mind” experience where one player (known as the Game Master) will create an adventure that the other players will play through as if they are the protagonists in the story. All you’ll need to play this game is this book, some pencils, some character sheets, and some 6-sided dice.</p>

            <p><em>If you’ve never played a table-top roleplay game before, you’re in for a treat! </em></p>

            <p>A table-top roleplay game (TTRPG) is an interactive adventure that is narrated like an audio book. But instead of just one narrator, every player in the group helps narrate the story and make the decisions of the main characters. </p>

            <h3>The Players</h3>
            <p>As a player, you are the protagonist of a great adventure! You will be given a story to go through where you can explore places, talk with people, discover secrets, and become the hero. How this story plays out is completely up to you. You make the decisions, and the Guild Master narratively describes the results of your actions.</p>

            <p>This is a story that you are writing with each of the other players. The end is not set, and your actions determine everything in this world – and you can do anything! Be it start a business, kill a dragon, overthrow the monarchy, or explore the wilderness.</p>

            <p>This book is full of mechanics that will help determine the outcome of your actions.</p>

            <h3>The Game Master</h3>
            <p>As the Game Master, you are the great storyteller. You weave the players, places, and people together to create memorable adventures. It is your job to narrate the story and judge the outcome of the players’ actions.</p>

            <p>You will create a story and guide your players through it.</p>

            <h3>The World</h3>
            <p>The world of Guildsmen is known as Thelius. This is a world of many races, many gods, and much magic. However, the story you weave can take place in any world you want. But there are a few rules that must remain constant in order for the rules in this book to work.</p>

            <ol>
                <li>Mythic creatures exist and have hearts of Navidus Crystals (see the Invention chapter for details).</li>
                <li>The world is steampunk, but Navidus Crystals are also used to power devices.</li>
                <li>Guilds are common establishments throughout the world.</li>
            </ol>

            <p>Beyond these 3 simple rules, the time era and world you set your game in is completely up to you. If you don’t know where to start, feel free to use the world of Thelius as your world of play.</p>

            <h3>Using These Rules</h3>
            <p>The first part of this book outlines how to build a character. This part is for all the players. Then, we will explain how the game works and what mechanics are at the players disposal. If you are the GM, you need to read through this entire book so that you can guide your players through the game. Players only need to read the Character Creation and Skills chapters as well as whatever seems relevant to their character.</p>

            <p>At the end of the book is a chapter titled <em>For the Game Master</em>. This chapter teaches you how to govern the game as well as how to create your own stories.</p>

            <p>So now, flip the page and get ready to enter <em>the world of Guildsmen!</em></p>

            {/* --------------------Character Creation-------------------- */}
            <h2 id='CC'>Character Creation</h2>
            <p>Your character is a persona you take on as you play the game. This is the protagonist that will be making decisions and affecting the world around you. To begin making a character, you’ll need a character sheet and a pencil. Keep in mind that you will act as this character throughout the duration of the game.</p>

            <p>The character sheet is the very last page in this book. You can also find a PDF version at guildsmen.com.</p>

            <h3>Who are You?</h3>
            <p>At the top-right of your character sheet are 4 fields: name, race, physique, and demeanor.</p>

            <p><strong>Name</strong> is your character’s name. All people need a name. This is what other players will refer to you as during the game. It can be anything, but make sure it sounds epic. Like Bob. Bob is always a great name for a character.</p>

            <p><strong>Race</strong> is your character’s race. In this book, we’ve outlined the major, classical-fantasy races as well as a few original races. If you have something else in mind, feel free to create your own unique race. See the list of races for details.</p>

            <p><strong>Demeanor</strong> is how your character holds them self in most situations. Write in an adjective like cocky, excitable, confident, etc. This adjective is a tool to help you act as your character would. </p>

            <p><strong>Physique</strong> is how your character is built physically. Write in an adjective like fat, thin, lean, strong, etc. This adjective is a tool to help the Game Master know what Non-Player Characters in the world would see at a glance.</p>

            <p>You can put the bottom four fields together, to create a brief description for you character. For example: A fat, jovial dwarf named Bob.</p>

            <h3>The Races</h3>
            <p>When selecting or creating a race, your stats will be decided. Your stats are three terms located at the top-right of your character sheet: Nimble, Tough, and Competence.</p>

            <p><strong>Nimble</strong> defines how much physical finesse your character has. Nimble is used to move quickly, jump over objects, dodge, and other actions that require more finesse.</p>

            <p><strong>Tough</strong> defines how much physical strength your character has. Tough is used to lift and move heavy objects, wrestle other creatures, and other actions that require more strength.</p>

            <p><strong>Compentence</strong> defines your ability to act under pressure and read situations. It is used to instinctually understand situations and see things that other people wouldn’t. In moments of pressure and crisis, it will be used.</p>

            <p>Beside each term is a row of bubbles that mark how much of that stat your character has. The more bubbles filled in, the better you will be when you try to do something related to that task (see the Skills chapter for details). When you pick a race, you are given a modifier next to each stat. Fill in the bubbles on your character sheet to match the modifiers given.</p>

            <h4><em>Locess</em></h4>
            <h4><em>Mausca</em></h4>
            <h4><em>Orcs</em></h4>
            <h4><em>Sentari</em></h4>
            <h4><em>Slated</em></h4>
            <h4><em>Ungal</em></h4>
            {/* --------------------Skills-------------------- */}
            <h2 id='skills'>Skills</h2>
            {/* --------------------Combat-------------------- */}
            <h2 id='combat'>Combat</h2>
            {/* --------------------Myth-------------------- */}
            <h2 id='myth'>Myth</h2>
            {/* --------------------Crafing-------------------- */}
            <h2 id='craft'>Crafting</h2>
            {/* --------------------Invention-------------------- */}
            <h2 id='invent'>Invention</h2>
            {/* --------------------The Market-------------------- */}
            <h2 id='market'>The Market</h2>
            {/* --------------------Establishments-------------------- */}
            <h2 id='est'>Establishments</h2>
            {/* --------------------Creatures-------------------- */}
            <h2 id='creatures'>Creatures</h2>
            {/* --------------------For the Game Master-------------------- */}
            <h2 id='GM'>For the Game Master</h2>
            <button type='button' className='contentsButton' onClick={toggleContents}>CONTENTS</button>
        </main>
    )
}

export default Rules;