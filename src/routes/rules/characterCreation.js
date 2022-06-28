import { Link, Outlet } from 'react-router-dom';
import toTop from '../../js/toTop';
import BackToContents from '../../components/backToContents';
import downloadIcon from '../../images/download-solid.svg';
import csSheet from '../../files/CS 10.2.pdf';
import '../../css/character-creation.css';

const CharacterCreation = () => {
    return (
        <main>
            <h1>Character Creation</h1>
            <p>Your character is a persona you take on as you play the game. This is the protagonist that will be making decisions and affecting the world around you. To begin making a character, you’ll need a printed character sheet and a pencil. Keep in mind that you will act as this character throughout the duration of the game.
            </p>

            <div className="csDownloadContainer">
                <a className="csDownload" href={csSheet} download='guildsmen-character-sheet'>
                    Download the character sheet
                    <img src={downloadIcon} alt="" className="filter" />
                </a>
            </div>

            <h2 id="whoAreYou">Who are You?</h2>
            <p>At the top-right of your character sheet are 4 fields: name, race, physique, and demeanor.</p>

            <p><strong>Name</strong> is your character’s name. All people need a name. This is what other players will refer to you as during the game. It can be anything, but make sure it sounds epic. Like Bob. Bob is always a great name for a character.</p>

            <p><strong>Race</strong> is your character’s race. In this game, there are six unique races for you to choose from: Locess, Mausca, Orcs, Sentari, Slated, and Ungal. A list of these races with descriptions is further down.</p>

            <p><strong>Demeanor</strong> is how your character holds them self in most situations. Write in an adjective like cocky, excitable, confident, etc. This adjective is a tool to help you act as your character would.</p>

            <p><strong>Physique</strong> is how your character is built physically. Write in an adjective like fat, thin, lean, strong, etc. This adjective is a tool to help the Game Master know what Non-Player Characters in the world would see at a glance.</p>

            <p>You can put these four fields together, to create a brief description for you character. For example: A fat, jovial Mausca named Bob.</p>

            <h2>The Races</h2>
            <p>When selecting a race, your stats will be decided. Your stats are four terms located at the top-right of your character sheet: Nimble, Tough, Competence, and Constitution.</p>

            <p><strong>Nimble</strong> defines how much physical finesse your character has. Nimble is used to move quickly, jump over objects, dodge, and other actions that require more finesse.</p>

            <p><strong>Tough</strong> defines how much physical strength your character has. Tough is used to lift and move heavy objects, wrestle other creatures, and other actions that require more strength.</p>

            <p><strong>Competence</strong> defines your ability to act under pressure and read situations. It is used to instinctually understand situations and see things that other people wouldn’t. In moments of pressure and crisis, it will be used.</p>

            <p><strong>Constitution</strong> defines your ability to endure stress. It us used to fend off poisons, resist disease and addication, to exert yourself for extended periods of time, and other actions that require resistence or endurace.</p>

            <p>Beside each term is a row of bubbles that mark how much of that stat your character has. The more bubbles filled in, the better you will be when you try to do something related to that task (see the <Link onClick={toTop} to="/rules/skills"><em>Skills chapter</em></Link> for details). When you pick a race, you are given a modifier next to each stat. Fill in the bubbles on your character sheet to match the modifiers given.</p>

            <h3>Locess</h3>
            <p>Locess are bug like creatures. They have 4 arms and their entire body is covered in a carapace. They have multifaceted eyes and antennae on top of angular heads. Thier culture is built around agriculture and reverence toward nature - especially plants. They build their homes in the boughs of great World Trees.</p>

            <table className='raceStatTable'>
                <thead>
                    <tr>
                        <th colSpan={1}>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='bottom left right'><em>+2 Nimble</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>-1 tough</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>+1 Competence</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>+0 Constitution</em></td>
                    </tr>
                </tbody>
            </table>

            <h3>Mausca</h3>
            <p>Mausca are small, thin creatures with plant-like features. Their hair is made of moss and vines, their skin looks like tree bark, and their eyes look like sea pearls. Their culture is tribalistic, revering the water and the life it brings them and all creatures. They build their homes in swampy wetlands from mud, leaves, and branches.</p>

            <table className='raceStatTable'>
                <thead>
                    <tr>
                        <th colSpan={1}>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='bottom left right'><em>+2 Nimble</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>-1 tough</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>+0 Competence</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>+1 Constitution</em></td>
                    </tr>
                </tbody>
            </table>

            <h3>Orcs</h3>
            <p>Orcs are large, burly creatures with small tusks protruding from their mouths and small horns protruding from the tops of their heads. Their culture is one of clans that hunt great beasts to show strength. They build their small towns in grassy plains, and they are known best for their excelent skill in hunting Mythical creatures</p>

            <table className='raceStatTable'>
                <thead>
                    <tr>
                        <th colSpan={1}>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='bottom left right'><em>+0 Nimble</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>+2 tough</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>+0 Competence</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>+0 Constitution</em></td>
                    </tr>
                </tbody>
            </table>

            <h3>Sentari</h3>
            <p>Sentari are the tallest of the races, with blunt features. Their skin is a marbling of red and brown and they have no hair on their bodies, whatsoever. Their culture is a Matriarchy that celebrates childhood, giving their young a dedicated period of time to leave home and explore the world to choose what social role they grow into. Their communities are generally very close-knit.</p>

            <table className='raceStatTable'>
                <thead>
                    <tr>
                        <th colSpan={1}>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='bottom left right'><em>-1 Nimble</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>+1 tough</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>+1 Competence</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>+0 Constitution</em></td>
                    </tr>
                </tbody>
            </table>

            <h3>Slated</h3>
            <p>The Slated are a desert people. Their skin is thick and the color of sandstone. They have plates that protrude from their backs that interlock when they crouch down, offering protection against sandstorms and making them appear like boulders to camouflage them from predators. Their culture is centered around invention and engineering. Among the Slated, failure is celebrated.</p>

            <table className='raceStatTable'>
                <thead>
                    <tr>
                        <th colSpan={1}>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='bottom left right'><em>-1 Nimble</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>+0 tough</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>+2 Competence</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>+1 Constitution</em></td>
                    </tr>
                </tbody>
            </table>

            <h3>Ungal</h3>
            <p>Ungal are a humanoid fungus people. They have a spongey, not-quite-smooth skin and dark, sickly moss that grows on their bodies. They are known for building communities in the deepest and darkest forests and their culture reveres death and decay, as all life must someday end.</p>

            <table className='raceStatTable'>
                <thead>
                    <tr>
                        <th colSpan={1}>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='bottom left right'><em>+0 Nimble</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>-1 tough</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>+1 Competence</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>+2 Constitution</em></td>
                    </tr>
                </tbody>
            </table>

            <h2>Who where You?</h2>
            <p>All characters need a past that defines them. This will help you understand how your character would act in the game. On the back of the character sheet are four large boxes labeled Goals & Motives, Personal Morals, Flaws & Weaknesses, and Important Connections.</p>

            <p>These four boxes help define how your character would behave. In each box, jot down one or two brief sentences that work for your character. If you can’t think of anything right away, that’s okay. You can slowly fill these out during play. As situations arise, try to decide why your character would do what you want them to do. Then see if that reason would fall under one of these four categories. If it does, then jot down a quick note so you remember in the future.</p>

            <p>Try to keep these somewhat general. Trying to be too specific can make it much harder to find things to put here.</p>

            <p><strong>Goals & Motives</strong> are what drive your character. Perhaps they want to be the greatest thief that ever lived, or perhaps their family is motivating them to go out and make some money to send back to them. Perhaps they’re seeking revenge on someone, or they want to open up a small business and settle down. The world is your oyster here and anything you think of can work. </p>

            <p><strong>Personal Morals</strong> are your character’s personal code of ethics. Perhaps they are completely against all violence. Or maybe they think killing a person they don’t know is completely okay. Maybe their okay with stealing, or maybe they’re very rigid about following the law. </p>

            <p><strong>Flaws & Weaknesses</strong> are the things that your character struggles with. Perhaps they’re a kleptomaniac (impulsively steals things), or maybe they’re terrified of fire. Perhaps they will always do what an attractive person wants them to do, or they’re easily distracted.</p>

            <p><strong>Important Connections</strong> are connections from your past. These can be tutors, trainers, parents, professors, criminal contacts, and other important connections your character could have made in their past. This is primarily useful for the Game Master so that they can tie connections from the past into the game.</p>

            <p>Once you’ve got some things put in each box, consider writing out a full backstory if you’re feeling ambitious. This is where you describe their life and what they’ve gone through up to the point when the game starts. This is where you can give specific reasons for what you put in those 4 boxes.</p>

            <p>From here, you need to give your character some skills. On the skills chart, fill in four skills up to the +0 mark. If you’ve made a backstory, try to consider what skills would make sense for your backstory. If you haven’t made a backstory, feel free to pick whatever skills you think would work for your character.</p>

            <p><em>Do not start with the myth skill before reading through the <Link onClick={toTop} to="/rules/myth">Myth chapter</Link></em></p>

            <p>Finally, you need to select a wealth adjective. This describes how wealthy your character is on average. If you wrote a backstory, go with whatever makes the most sense for your backstory. If not, you should probably go with Moderate.</p>

            <table className='raceStatTable'>
                <thead>
                    <tr>
                        <th colSpan={1}>Welath Adjectives</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='bottom left right'><em>Destitute</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Poor</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Moderate</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Wealthy</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Exquisite</em></td>
                    </tr>
                </tbody>
            </table>

            <p>Pick an adjective and fill in the corresponding bubble in the Wealth box.</p>

            <p>While you’re on your adventure, you may end up buying more items than your character generally carries around. When this happens, your Wealth may go down. More details on this in <Link onClick={toTop} to="rules/the-market"><em>The Market chapter</em></Link>.</p>

            <p>After that, you will need to determine how lucky your character is. Roll 1d6 (1, 6-sided die) and consult the table. Fill in the corresponding bubble in the Luck box on your character sheet.</p>

            <table className='raceStatTable'>
                <thead>
                    <tr>
                        <th colSpan={2}>Luck</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='bottom left'>1</td>
                        <td className='bottom right'>-3</td>
                    </tr>
                    <tr>
                        <td className='bottom left'>2</td>
                        <td className='bottom right'>-2</td>
                    </tr>
                    <tr>
                        <td className='bottom left'>3</td>
                        <td className='bottom right'>-1</td>
                    </tr>
                    <tr>
                        <td className='bottom left'>4</td>
                        <td className='bottom right'>+1</td>
                    </tr>
                    <tr>
                        <td className='bottom left'>5</td>
                        <td className='bottom right'>+2</td>
                    </tr>
                    <tr>
                        <td className='bottom left'>6</td>
                        <td className='bottom right'>+3</td>
                    </tr>
                </tbody>
            </table>

            <p>Whenever you do something or want something to happen that would rely on luck, you will roll 2d6 (2, 6-sided dice) and add the number that is in your luck box. The higher the total number, the better the outcome.</p>

            <p>This same principle is how skills work (see the <Link onClick={toTop} to="/rules/skills"><em>Skills chapter</em></Link> for  details).</p>

            <h2>Where are You Going?</h2>
            <p>This final part of character creation should be done with all players present, because this decision will affect everyone.</p>

            <p>You now need to decide where your character is going. You and everyone else in your party are joining a guild, and from here the grand adventures the Game Master has in store for you will begin. There are five common guilds, each will train your players in a specific set of skills.</p>

            <p>Once you choose a guild, all players will increase the skills listed to +1.</p>

            <h3>Assassins Guild</h3>
            <p>Assassins are those that believe anyone is worthy of death… for the right price. Assassins lurk in the dark and strike when least expected. They are efficient killers and know how to get in, spill blood, and get out as quickly as possible.</p>

            <table className='raceStatTable'>
                <thead>
                    <tr>
                        <th colSpan={1}>Guild Skills</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='bottom left right'><em>Investigate</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Sneaky</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Social</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Throwdown</em></td>
                    </tr>
                </tbody>
            </table>

            <h3>Mythic Hunters Guild</h3>
            <p>Mythic Hunters are those that thrill in hunting the most dangerous beasts of the wilds. Their main goal is to kill Mythical creatures, harvest Navidus Crystals from them, and bring the crystals back to the guild. Occasionally, they will get hired to kill Mythical creatures that are causing a nuisance, or to help defend smaller towns from Mythical creature attacks.</p>

            <table className='raceStatTable'>
                <thead>
                    <tr>
                        <th colSpan={1}>Guild Skills</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='bottom left right'><em>Investigate</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Medic</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Nature</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Throwdown</em></td>
                    </tr>
                </tbody>
            </table>

            <h3>Explorers Guild</h3>
            <p>Explorers desire to bring the unknown world into the light. They go beyond the borders of the map to discover lands that no race has ever experienced. They know that the wonders of the world are beyond the borders of current maps.</p>

            <table className='raceStatTable'>
                <thead>
                    <tr>
                        <th colSpan={1}>Guild Skills</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='bottom left right'><em>Craft</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Investigate</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Medic</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Throwdown</em></td>
                    </tr>
                </tbody>
            </table>

            <h3>Mercenaries Guild</h3>
            <p>Mercenaries are those who use their strength to make a profit. They are loyal defenders – if they get paid. They are masters of martial skills and make formidable opponents.</p>

            <table className='raceStatTable'>
                <thead>
                    <tr>
                        <th colSpan={1}>Guild Skills</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='bottom left right'><em>Craft</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Investigate</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Medic</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Throwdown</em></td>
                    </tr>
                </tbody>
            </table>

            <h3>Thieves Guild</h3>
            <p>Thieves understand the concept of value. They know that a fortune can only be made when working outside the law. Nothing is beyond their grasp and no place is prohibited to them – if they can be sneaky enough.</p>

            <table className='raceStatTable'>
                <thead>
                    <tr>
                        <th colSpan={1}>Guild Skills</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='bottom left right'><em>Investigate</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Performace</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Sneaky</em></td>
                    </tr>
                    <tr>
                        <td className='bottom left right'><em>Throwdown</em></td>
                    </tr>
                </tbody>
            </table>

            <h2>Going Forward</h2>
            <p>Now that you have a character, give your character whatever items make sense due to your skills, background, and guild. Next, go on to the next chapter to learn about skills, what they are, what they can do, and how to increase them.</p>

            <p>We suggest you read the rest of the rules chapters in their entirety as well to get a good grasp of the game and its mechanics. It’s not necessary but it might be good to see what can be accomplished.</p>

            <p>There’s so much you can do with the mechanics we’ve created for you, and we think you’ll really enjoy using them. And if you don’t care about the mechanics but want some good world lore to read, go through the <Link onClick={toTop} to="/rules/lore"><em>Lore</em></Link> section and the <Link onClick={toTop} to="/bestiary"><em>Bestiary</em></Link>.</p>

            <p>As you move forward through the game, we hope that you find a love for roleplay and enjoy the systems of the game as much as we do.</p>

            <p><em>Good luck!</em></p>
            <Outlet />
            <BackToContents />
        </main>
    )
}

export default CharacterCreation;