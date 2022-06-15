import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import RaceStats from './components/RaceStats';

const Rules = () => {
    const toggleContents = () => {
        const contents = document.getElementById('contents');
        if (contents !== null) {
            contents.classList.add('contentsVisible');
        }
    }

    const closeContents = () => {
        console.log('close clicked');
        const contents = document.getElementById('contents');
        if (contents !== null) {
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
                    <li><a onClick={closeContents} href='#intro'>Introduction</a></li>
                    <li><a onClick={closeContents} href='#CC'>Character Creation</a></li>
                    <li><a onClick={closeContents} href='#skills'>Skills</a></li>
                    <li><a onClick={closeContents} href='#combat'>Combat</a></li>
                    <li><a onClick={closeContents} href='#myth'>Myth</a></li>
                    <li><a onClick={closeContents} href='#craft'>Crafting</a></li>
                    <li><a onClick={closeContents} href='#invent'>Invention</a></li>
                    <li><a onClick={closeContents} href='#market'>The Market</a></li>
                    <li><a onClick={closeContents} href='#est'>Establishments</a></li>
                    <li><a onClick={closeContents} href='#creatures'>Creatures</a></li>
                    <li><a onClick={closeContents} href='#GM'>For the GM</a></li>
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
            <p>Locess are bug like creatures. They have 4 arms, and their entire body is covered in a carapace. They have multifaceted eyes, antennae on top of angular heads. They culture focuses on agriculture and protecting nature.</p>
            <RaceStats nimble='+2' tough='-1' competence='+1' constitution='+0' />

            <h4><em>Mausca</em></h4>
            <p>Mausca are small, thin creatures with plant-like features. Their hair is made of moss and vines, their skin looks like tree bark, and their eyes look like sea pearls. Their culture is tribalistic, revering the water and the life it brings them and all creatures. They build their homes in swampy wetlands from mud, leaves, and branches.</p>
            <RaceStats nimble='+2' tough='-1' competence='+0' constitution='+1' />

            <h4><em>Orcs</em></h4>
            <p>Orcs are large, burly creatures with small tusks protruding from their mouths and small horns protruding from the tops of their heads. Their culture is one of tribes that war to show strength. They build their small towns in the coldest regions of the world, and they are known best for their luxurious northern pelts and their excellent prowess in battle.</p>
            <RaceStats nimble='-1' tough='+2' competence='+0' constitution='+1' />

            <h4><em>Sentari</em></h4>
            <p>Sentari are the tallest of the races, with blunt features. Their skin is a marbling of red and brown and they have no hair on their bodies at all. Their culture is a Matriarchy that celebrates childhood, giving their young a dedicated period of time to leave home and explore the world to choose what they grow into. Their communities are close-knit.</p>
            <RaceStats nimble='-1' tough='+1' competence='+1' constitution='+1' />

            <h4><em>Slated</em></h4>
            <p>The Slated are a desert people. Their skin is thick and the color of sandstone. They have plates that protrude from their backs that interlock when they crouch down, offering protection against sandstorms and making them appear like boulders to camouflage the from predators. Ther culture is centered around engineering and inention.</p>
            <RaceStats nimble='-1' tough='+0' competence='+2' constitution='+1' />

            <h4><em>Ungal</em></h4>
            <p>Ungal are a humanoid fungus people. They appear as fleshy and not quite smooth as mushrooms with dark moss growing on their bodies. They are known for building communities in the deepest and darkest forests and their culture reveres death and decay, as all life must someday end.</p>
            <RaceStats nimble='+1' tough='+0' competence='+1' constitution='+0' />

            <h3>Who Were You?</h3>
            <p>All characters need a past that defines them. This will help you understand how your character would act in the game. On the back of the character sheet are four large boxes labeled Goals & Motives, Personal Morals, Flaws & Weaknesses, and Important Connections.</p>

            <p>These four boxes are what defines how your character behaves. In each box, jot down one or two brief sentences that you want for your character. If you can’t think of anything right away, that’s okay. You can slowly fill these out during play. As situations arise, try to decide why your character would do what you want them to do. Then see if that reason would fall under one of these four categories. If it does, then jot down a quick note so you remember in the future.</p>

            <p>Try to keep these somewhat general. Trying to be too specific can make it much harder to find things to put here.</p>

            <p><strong>Goals & Motives</strong> are what drives your character. Perhaps they want to be the greatest thief that ever lived, or perhaps their family is motivating them to go out and make some money to send back to them. Perhaps they’re seeking revenge on someone, or they want to open up a small business and settle down. The world is your oyster here and anything you think of can work.</p>

            <p><strong>Personal Morals</strong> are your character’s personal code of ethics. Perhaps they are completely against all violence. Or maybe they think killing a person they don’t know is completely okay. Maybe their okay with stealing, or maybe they’re very rigid about following the law.</p>

            <p><strong>Flaws & Weaknesses</strong> are the things that your character struggles with. Perhaps they’re a kleptomaniac (impulsively steals things), or maybe they’re terrified of fire. Perhaps they will always do what an attractive person wants them to do, or they’re easily distracted.</p>

            <p><strong>Important Connections</strong> are connections from your past. These can be tutors, trainers, parents, professors, criminal contacts, and other important connections your character could have made in their past. This is primarily useful for the Game Master so that they can tie connections from the past into the game.</p>

            <p>Once you’ve got some things put in each box, consider writing out a full backstory if you’re feeling ambitious. This is where you describe their life and what they’ve gone through up to the point when the game starts. This is where you can give specific reasons for what you put in those 4 boxes.</p>

            <p>From here, you need to give your character some skills. On the skills chart, fill in four skills up to the +0 mark. If you’ve made a backstory, try to consider what skills would make sense for your backstory. If you haven’t made a backstory, feel free to pick whatever skills you think would work for your character.</p>

            <p>Finally, you need to select a wealth adjective. This describes how wealthy your character is on average. If you wrote a back story, go with whatever makes the most sense for your back story. If not, you should probably go with Moderate.</p>

            <p className='tableTitle'>Wealth Adjectives</p>
            <div className='singleColumnTable table'>
                <p className='tableItem'>Destitute</p>
                <p className='tableItem'>Poor</p>
                <p className='tableItem'>Moderate</p>
                <p className='tableItem'>Wealthy</p>
                <p className='tableItem'>Exquisite</p>
            </div>

            <p>Pick an adjective and fill in the corresponding bubble in the Wealth box.</p>

            <p>While you’re on your adventure, you may end up buying more items than your character generally carries around. When this happens, your Wealth may go down. More details on this in <em>The Market</em> chapter.</p>

            <p>After that, you will need to determine how lucky your character is. Roll 1d6 (1, 6-sided die) and consult the table. Fill in the corresponding bubble in the Luck box on your character sheet.</p>


            <p className='tableTitle'>Luck</p>
            <div className='twoColumnTable table luckTable'>
                <div className='col1'>
                    <p className='colItem'>1</p>
                    <p className='colItem'>2</p>
                    <p className='colItem'>3</p>
                    <p className='colItem'>4</p>
                    <p className='colItem'>5</p>
                    <p className='colItem'>6</p>
                </div>
                <div className='col2'>
                    <p className='colItem'>-3</p>
                    <p className='colItem'>-2</p>
                    <p className='colItem'>-1</p>
                    <p className='colItem'>+1</p>
                    <p className='colItem'>+2</p>
                    <p className='colItem'>+3</p>
                </div>
            </div>

            <p>Whenever you do something or want something to happen that would rely on luck, you will roll 2d6 (2, 6-sided dice) and add the number that is in your luck box. The higher the total number, the better the outcome.</p>

            <p>This same principle is how skills work (see the <em>Skills</em> chapter for details).</p>

            <h3>Where are You Going?</h3>
            <p>This final part of character creation should be done with all players present, because this decision will affect everyone.</p>

            <p>You now need to decide where your characters are going. They all are joining a guild, and from here the grand adventures the Game Master has in store for you will begin. There are six common guilds, each will train your players in a specific set of skills.</p>

            <p>Once you choose a guild, all players will increase the skills listed to +1.</p>

            <h4>Assassins Guild</h4>
            <p>Assassins are those that believe anyone is worthy of death… for the right price. Assassins lurk in the dark and strike when least expected. They are efficient killers and know how to get in, spill blood, and get out as quickly as possible.</p>
            <p className='tableTitle'>Guild Skills</p>
            <div className='singleColumnTable table guildSkills'>
                <p className='guildSkill'><em>Investigate</em></p>
                <p className='guildSkill'><em>Sneaky</em></p>
                <p className='guildSkill'><em>Sneaky</em></p>
                <p className='guildSkill'><em>Throwdown</em></p>
            </div>

            <h4>Mythic Hunters Guild</h4>
            <p>Mythic Hunters are those that thrill in hunting the most dangerous beasts of the wilds. Their main goal is to kill Mythic creatures, harvest Navidus Crystals, and bring them back to the guild. Occasionally, they will get hired to kill Mythic creatures that are causing a nuisance, or to help defend smaller towns from Mythic creature attacks.</p>
            <p className='tableTitle'>Guild Skills</p>
            <div className='singleColumnTable table guildSkills'>
                <p className='guildSkill'><em>Invent</em></p>
                <p className='guildSkill'><em>Medic</em></p>
                <p className='guildSkill'><em>Nature</em></p>
                <p className='guildSkill'><em>Throwdown</em></p>
            </div>

            <h4>Explorers Guild</h4>
            <p>Explorers desire to bring the unknown world into the light. They go beyond the borders of the map to discover lands that no race has ever experienced. They know that the wonders of the world are beyond the borders of current maps.</p>
            <p className='tableTitle'>Guild Skills</p>
            <div className='singleColumnTable table guildSkills'>
                <p className='guildSkill'><em>Investigate</em></p>
                <p className='guildSkill'><em>Lead</em></p>
                <p className='guildSkill'><em>Medic</em></p>
                <p className='guildSkill'><em>Nature</em></p>
            </div>

            <h4>Mercenaries Guild</h4>
            <p>Mercenaries are those who use their strength to make a profit. They are loyal defenders – if they get paid. They are masters of martial skills and make formidable opponents.</p>
            <p className='tableTitle'>Guild Skills</p>
            <div className='singleColumnTable table guildSkills'>
                <p className='guildSkill'><em>Craft</em></p>
                <p className='guildSkill'><em>Investigate</em></p>
                <p className='guildSkill'><em>Medic</em></p>
                <p className='guildSkill'><em>Throwdown</em></p>
            </div>

            <h4>Thieves Guild</h4>
            <p>Thieves understand the concept of value. They know that a fortune can only be made when working outside the law. Nothing is beyond their grasp and no place is prohibited to them – if they can be sneaky enough.</p>
            <p className='tableTitle'>Guild Skillss</p>
            <div className='singleColumnTable table guildSkills'>
                <p className='guildSkill'>Investigate</p>
                <p className='guildSkill'>Sneaky</p>
                <p className='guildSkill'>Social</p>
                <p className='guildSkill'>Throwdown</p>
            </div>

            <h3>Going Forward</h3>
            <p>Now that you have a character, give your character whatever items make sense due to your skills, background, and guild. Next, go on to the next chapter to learn about skills, what they are, what they can do, and how to increase them.</p>

            <p>We suggest you read the rest of the book in its entirety as well to get a good grasp of the game and its mechanics. It’s not necessary but it might be good to see what can be accomplished.</p>

            <p>There’s so much you can do with the mechanics we’ve created for you, and we think you’ll really enjoy using them. And if you don’t care about the mechanics but want some good world lore to read, go through the Mythos in the Appendices of the book.</p>

            <p>As you move forward through the game, we hope that you find a love for roleplay and enjoy the systems of the game as much as we do.</p>

            <p><em>Good luck!</em></p>

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