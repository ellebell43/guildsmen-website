class Character {
  constructor(name, race, stats, wealth, luck, skills, details, guild) {
    this.name = name;
    this.race = race;
    this.stats = stats;
    this.wealth = wealth;
    this.luck = luck;
    this.skills = skills;
    this.details = details;
    this.guild = guild;
    this.harm = 0;
    this.dying = false;
    this.addiction = 0;
    this.addictionProgress = 0;
    this.experience = 0;
    this.experienceProgress = 0;
    this.gear = [];
  }
}

const defaultSkills = [
  { name: 'Craft', modifier: -1, spec1: null, spec2: null },
  { name: 'Investigate', modifier: -1, spec1: null, spec2: null },
  { name: 'Leadership', modifier: -1, spec1: null, spec2: null },
  { name: 'Medic', modifier: -1, spec1: null, spec2: null },
  { name: 'Myth', modifier: -1, spec1: null, spec2: null },
  { name: 'Nature', modifier: -1, spec1: null, spec2: null },
  { name: 'Performance', modifier: -1, spec1: null, spec2: null },
  { name: 'Social', modifier: -1, spec1: null, spec2: null },
  { name: 'Sneaky', modifier: -1, spec1: null, spec2: null },
  { name: 'Tech', modifier: -1, spec1: null, spec2: null },
  { name: 'Throwdown', modifier: -1, spec1: null, spec2: null }
]

const defaultStats = [
  { name: 'Nimble', modifier: -1 },
  { name: 'Tough', modifier: -1 },
  { name: 'Competence', modifier: -1 },
  { name: 'Constitution', modifier: -1 },
]

const defaultDetails = [
  { name: 'goals', content: '' },
  { name: 'morals', content: '' },
  { name: 'weaknesses', content: '' },
  { name: 'connections', content: '' }
]

let newCharacter = new Character(null, null, defaultStats, null, null, defaultSkills, defaultDetails, null);

let characters;

if (localStorage.getItem('guildsmenCharacters') === null) {
  console.log('No characters')
  characters = [];
} else {
  characters = JSON.parse(localStorage.getItem('guildsmenCharacters'));
  console.log('some characters found');
  console.log(characters);
}

const toTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const storeCharacters = () => {
  localStorage.setItem('guildsmenCharacters', JSON.stringify(characters));
}

let currentTab = 0;
const x = document.getElementsByClassName('section')
function showTab(n) {
  if (n == 0) {
    document.getElementById("prevBtn").classList.add('hidden');
  } else {
    document.getElementById("prevBtn").classList.remove('hidden');
  }

  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }

  if (currentTab >= x.length) {
    document.getElementById("done").classList.remove('hidden');
    document.getElementById("nextBtn").classList.add('hidden');
    document.getElementById("prevBtn").classList.add('hidden');
  } else {
    x[n].classList.remove('hidden');
  }
}

function nextPrev(n) {
  // This function will figure out which tab to display
  // Exit the function if any field in the current tab is invalid:
  //if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].classList.add('hidden');
  switch (currentTab) {
    case 0:
      submitCharacter();
      break;
    case 1:
      submitRace();
      break;
    case 2:
      submitDetails();
      break;
    case 3:
      submitSkills();
      break;
    case 4:
      submitWealth();
      break;
    case 5:
      submitLuck();
      break;
    case 6:
      submitGuild();
      submitNewCharacter();
      break;
    default:
      console.log('something went wrong');
  }

  currentTab = currentTab + n;

  toTop();
  resetDice();
  showTab(currentTab);
}

const submitCharacter = () => {
  const name = document.getElementById('name');
  newCharacter.name = name.value;

  const demeanor = document.getElementById('demeanor');
  newCharacter.demeanor = demeanor.value;

  const physique = document.getElementById('physique');
  newCharacter.physique = physique.value;
}

const submitRace = () => {
  let y = x[currentTab].getElementsByTagName("input");
  for (let i = 0; i < y.length; i++) {
    if (y[i].checked) {
      newCharacter.race = y[i].value;
    }
  }

  switch (newCharacter.race) {
    case 'Locess':
      newCharacter.stats = [
        { name: 'Nimble', modifier: 2 },
        { name: 'Tough', modifier: -1 },
        { name: 'Competence', modifier: 1 },
        { name: 'Constitution', modifier: 0 },
      ];
      break;
    case 'Mausca':
      newCharacter.stats = [
        { name: 'Nimble', modifier: 2 },
        { name: 'Tough', modifier: -1 },
        { name: 'Competence', modifier: 0 },
        { name: 'Constitution', modifier: 1 },
      ];
      break;
    case 'Orc':
      newCharacter.stats = [
        { name: 'Nimble', modifier: 0 },
        { name: 'Tough', modifier: 2 },
        { name: 'Competence', modifier: 0 },
        { name: 'Constitution', modifier: 0 },
      ];
      break;
    case 'Sentari':
      newCharacter.stats = [
        { name: 'Nimble', modifier: 1 },
        { name: 'Tough', modifier: 1 },
        { name: 'Competence', modifier: 1 },
        { name: 'Constitution', modifier: 0 },
      ];
      break;
    case 'Slated':
      newCharacter.stats = [
        { name: 'Nimble', modifier: -1 },
        { name: 'Tough', modifier: 0 },
        { name: 'Competence', modifier: 2 },
        { name: 'Constitution', modifier: 1 },
      ];
      break;
    case 'Ungal':
      newCharacter.stats = [
        { name: 'Nimble', modifier: 0 },
        { name: 'Tough', modifier: -1 },
        { name: 'Competence', modifier: 1 },
        { name: 'Constitution', modifier: 2 },
      ];
      break;
    default:
      console.log('something went wrong');
  }
}

const submitDetails = () => {
  const goals = document.getElementById('goals').value;
  const morals = document.getElementById('morals').value;
  const weaknesses = document.getElementById('weaknesses').value;
  const connections = document.getElementById('connections').value;

  for (let i = 0; i < newCharacter.details.length; i++) {
    switch (newCharacter.details[i].name) {
      case 'goals':
        newCharacter.details[i].content = goals;
        break;
      case 'morals':
        newCharacter.details[i].content = morals;
        break;
      case 'weaknesses':
        newCharacter.details[i].content = weaknesses;
        break;
      case 'connections':
        newCharacter.details[i].content = connections;
        break;
      default:
        console.log('something went wrong');
    }
  }
}

const submitSkills = () => {
  let y = x[currentTab].getElementsByTagName("input");
  let checkCount = 0;
  let craft = -1;
  let investigate = -1;
  let leadership = -1;
  let medic = -1;
  let myth = -1;
  let nature = -1;
  let performance = -1;
  let social = -1;
  let sneaky = -1;
  let tech = -1;
  let throwdown = -1;

  for (let i = 0; i < y.length; i++) {
    switch (y[i].name) {
      case 'Craft':
        if (y[i].checked) {
          craft++;
          checkCount++;
        }
        break;
      case 'Investigate':
        if (y[i].checked) {
          investigate++;
          checkCount++;
        }
        break;
      case 'Leadership':
        if (y[i].checked) {
          leadership++;
          checkCount++;
        }
        break;
      case 'Medic':
        if (y[i].checked) {
          medic++;
          checkCount++;
        }
        break;
      case 'Myth':
        if (y[i].checked) {
          myth++;
          checkCount++;
        }
        break;
      case 'Nature':
        if (y[i].checked) {
          nature++;
          checkCount++;
        }
        break;
      case 'Performance':
        if (y[i].checked) {
          performance++;
          checkCount++;
        }
        break;
      case 'Social':
        if (y[i].checked) {
          social++;
          checkCount++;
        }
        break;
      case 'Sneaky':
        if (y[i].checked) {
          sneaky++;
          checkCount++;
        }
        break;
      case 'Tech':
        if (y[i].checked) {
          tech++;
          checkCount++;
        }
        break;
      case 'Throwdown':
        if (y[i].checked) {
          throwdown++;
          checkCount++;
        }
        break;
      default:
        console.log('something went wrong');
    }
  }

  newCharacter.skills = [
    { name: 'Craft', modifier: craft, spec1: null, spec2: null },
    { name: 'Investigate', modifier: investigate, spec1: null, spec2: null },
    { name: 'Leadership', modifier: leadership, spec1: null, spec2: null },
    { name: 'Medic', modifier: medic, spec1: null, spec2: null },
    { name: 'Myth', modifier: myth, spec1: null, spec2: null },
    { name: 'Nature', modifier: nature, spec1: null, spec2: null },
    { name: 'Performance', modifier: performance, spec1: null, spec2: null },
    { name: 'Social', modifier: social, spec1: null, spec2: null },
    { name: 'Sneaky', modifier: sneaky, spec1: null, spec2: null },
    { name: 'Tech', modifier: tech, spec1: null, spec2: null },
    { name: 'Throwdown', modifier: throwdown, spec1: null, spec2: null }
  ]

  if (myth > -1) {
    newCharacter.addiction = 1;
    newCharacter.addictionProgress = 3;
  }
}

const submitWealth = () => {
  let y = x[currentTab].getElementsByTagName("input");
  for (let i = 0; i < y.length; i++) {
    if (y[i].checked) {
      newCharacter.wealth = y[i].value;
    }
  }
}

const submitLuck = () => {
  newCharacter.luck = document.getElementById('luckInput').value;
}

const submitGuild = () => {
  let y = x[currentTab].getElementsByTagName("input");
  let guildSkills;
  for (let i = 0; i < y.length; i++) {
    if (y[i].checked) {
      switch (y[i].value) {
        case 'assassins':
          newCharacter.guild = 'Assassins';
          guildSkills = ['Investigate', 'Sneaky', 'Social', 'Throwdown'];
          break;
        case 'hunters':
          newCharacter.guild = 'Mythic Hunters';
          guildSkills = ['Investigate', 'Medic', 'Nature', 'Throwdown'];
          break;
        case 'explorers':
          newCharacter.guild = 'Explorers';
          guildSkills = ['Craft', 'Investigate', 'Medic', 'Throwdown'];
          break;
        case 'mercenaries':
          newCharacter.guild = 'Mercenaries';
          guildSkills = ['Craft', 'Investigate', 'Medic', 'Throwdown'];
          break;
        case 'thieves':
          newCharacter.guild = 'Thieves';
          guildSkills = ['Investigate', 'Performance', 'Sneaky', 'Throwdown'];
          break;
      }
    }
  }

  for (let i = 0; i < newCharacter.skills.length; i++) {
    if (guildSkills.indexOf(newCharacter.skills[i].name) !== -1 && newCharacter.skills[i].modifier < 1) {
      newCharacter.skills[i].modifier = 1;
    }
  }
}

const submitNewCharacter = () => {
  if (characters) {
    characters.push(newCharacter);

  } else {
    characters = [];
    characters.push(newCharacter);
  }
  localStorage.setItem('guildsmenCharacters', JSON.stringify(characters));
  document.getElementById('form').reset()
}