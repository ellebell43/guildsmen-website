class Character {
  constructor(name, race, stats, wealth, luck, skills, details) {
    this.name = name;
    this.race = race;
    this.stats = stats;
    this.wealth = wealth;
    this.luck = luck;
    this.skills = skills;
    this.details = details;
  }
}

const defaultSkills = [
  { name: 'craft', modifier: -1, spec1: null, spec2: null },
  { name: 'investigate', modifier: -1, spec1: null, spec2: null },
  { name: 'leadership', modifier: -1, spec1: null, spec2: null },
  { name: 'medic', modifier: -1, spec1: null, spec2: null },
  { name: 'myth', modifier: -1, spec1: null, spec2: null },
  { name: 'nature', modifier: -1, spec1: null, spec2: null },
  { name: 'performance', modifier: -1, spec1: null, spec2: null },
  { name: 'social', modifier: -1, spec1: null, spec2: null },
  { name: 'sneaky', modifier: -1, spec1: null, spec2: null },
  { name: 'tech', modifier: -1, spec1: null, spec2: null },
  { name: 'throwdown', modifier: -1, spec1: null, spec2: null }
]

const defaultStats = [
  { name: 'nimble', modifier: -1 },
  { name: 'tough', modifier: -1 },
  { name: 'competence', modifier: -1 },
  { name: 'constitution', modifier: -1 },
]

const defaultDetails = [
  { name: 'goals', content: '' },
  { name: 'morals', content: '' },
  { name: 'weaknesses', content: '' },
  { name: 'connections', content: '' }
]

let newCharacter = new Character(null, null, defaultStats, null, null, defaultSkills, defaultDetails);

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
    case 'locess':
      newCharacter.stats = [
        { name: 'nimble', modifier: 2 },
        { name: 'tough', modifier: -1 },
        { name: 'competence', modifier: 1 },
        { name: 'constitution', modifier: 0 },
      ];
      break;
    case 'mausca':
      newCharacter.stats = [
        { name: 'nimble', modifier: 2 },
        { name: 'tough', modifier: -1 },
        { name: 'competence', modifier: 0 },
        { name: 'constitution', modifier: 1 },
      ];
      break;
    case 'orc':
      newCharacter.stats = [
        { name: 'nimble', modifier: 0 },
        { name: 'tough', modifier: 2 },
        { name: 'competence', modifier: 0 },
        { name: 'constitution', modifier: 0 },
      ];
      break;
    case 'sentari':
      newCharacter.stats = [
        { name: 'nimble', modifier: 1 },
        { name: 'tough', modifier: 1 },
        { name: 'competence', modifier: 1 },
        { name: 'constitution', modifier: 0 },
      ];
      break;
    case 'slated':
      newCharacter.stats = [
        { name: 'nimble', modifier: -1 },
        { name: 'tough', modifier: 0 },
        { name: 'competence', modifier: 2 },
        { name: 'constitution', modifier: 1 },
      ];
      break;
    case 'ungal':
      newCharacter.stats = [
        { name: 'nimble', modifier: 0 },
        { name: 'tough', modifier: -1 },
        { name: 'competence', modifier: 1 },
        { name: 'constitution', modifier: 2 },
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
      case 'craft':
        if (y[i].checked) {
          craft++;
          checkCount++;
        }
        break;
      case 'investigate':
        if (y[i].checked) {
          investigate++;
          checkCount++;
        }
        break;
      case 'leadership':
        if (y[i].checked) {
          leadership++;
          checkCount++;
        }
        break;
      case 'medic':
        if (y[i].checked) {
          medic++;
          checkCount++;
        }
        break;
      case 'myth':
        if (y[i].checked) {
          myth++;
          checkCount++;
        }
        break;
      case 'nature':
        if (y[i].checked) {
          nature++;
          checkCount++;
        }
        break;
      case 'performance':
        if (y[i].checked) {
          performance++;
          checkCount++;
        }
        break;
      case 'social':
        if (y[i].checked) {
          social++;
          checkCount++;
        }
        break;
      case 'sneaky':
        if (y[i].checked) {
          sneaky++;
          checkCount++;
        }
        break;
      case 'tech':
        if (y[i].checked) {
          tech++;
          checkCount++;
        }
        break;
      case 'throwdown':
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
    { name: 'craft', modifier: craft, spec1: null, spec2: null },
    { name: 'investigate', modifier: investigate, spec1: null, spec2: null },
    { name: 'leadership', modifier: leadership, spec1: null, spec2: null },
    { name: 'medic', modifier: medic, spec1: null, spec2: null },
    { name: 'myth', modifier: myth, spec1: null, spec2: null },
    { name: 'nature', modifier: nature, spec1: null, spec2: null },
    { name: 'performance', modifier: performance, spec1: null, spec2: null },
    { name: 'social', modifier: social, spec1: null, spec2: null },
    { name: 'sneaky', modifier: sneaky, spec1: null, spec2: null },
    { name: 'tech', modifier: tech, spec1: null, spec2: null },
    { name: 'throwdown', modifier: throwdown, spec1: null, spec2: null }
  ]
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
          guildSkills = ['investigate', 'sneaky', 'social', 'throwdown'];
          break;
        case 'hunters':
          guildSkills = ['investigate', 'medic', 'nature', 'throwdown'];
          break;
        case 'explorers':
          guildSkills = ['craft', 'investigate', 'medic', 'throwdown'];
          break;
        case 'mercenaries':
          guildSkills = ['craft', 'investigate', 'medic', 'throwdown'];
          break;
        case 'thieves':
          guildSkills = ['investigate', 'performance', 'sneaky', 'throwdown'];
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
  characters.push(newCharacter);
  localStorage.setItem('guildsmenCharacters', JSON.stringify(characters));
  document.getElementById('form').reset()
}