#!/usr/bin/env node

const { spawnSync } = require('child_process')

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
]

const verbs = [
  'Add',
  'Remove',
  'Change',
]

const adjectives = [
  'tricky',
  'helpful',
  'nasty',
  'useful',
  'hidden',
  'experimental',
  ...colors,
]

const flowers = [
  'anemone',
  'crocus',
  'freesia',
  'hyacinth',
  'hydrangea',
  'iris',
  'lily',
  'orchid',
  'plumeria',
  'rose',
]

const elements = [
  'Actinium',
  'Aluminum',
  'Americium',
  'Antimony',
  'Argon',
  'Arsenic',
  'Astatine',
  'Barium',
  'Berkelium',
  'Beryllium',
  'Bismuth',
  'Bohrium',
  'Boron',
  'Bromine',
  'Cadmium',
  'Calcium',
  'Californium',
  'Carbon',
  'Cerium',
  'Cesium',
  'Chlorine',
  'Chromium',
  'Cobalt',
  'Copernicium',
  'Copper',
  'Curium',
  'Darmstadtium',
  'Dubnium',
  'Dysprosium',
  'Einsteinium',
  'Erbium',
  'Europium',
  'Fermium',
  'Flerovium',
  'Fluorine',
  'Francium',
  'Gadolinium',
  'Gallium',
  'Germanium',
  'Gold',
  'Hafnium',
  'Hassium',
  'Helium',
  'Holmium',
  'Hydrogen',
  'Indium',
  'Iodine',
  'Iridium',
  'Iron',
  'Krypton',
  'Lanthanum',
  'Lawrencium',
  'Lead',
  'Lithium',
  'Livermorium',
  'Lutetium',
  'Magnesium',
  'Manganese',
  'Meitnerium',
  'Mendelevium',
  'Mercury',
  'Molybdenum',
  'Moscovium',
  'Neodymium',
  'Neon',
  'Neptunium',
  'Nickel',
  'Nihonium',
  'Niobium',
  'Nitrogen',
  'Nobelium',
  'Oganesson',
  'Osmium',
  'Oxygen',
  'Palladium',
  'Phosphorus',
  'Platinum',
  'Plutonium',
  'Polonium',
  'Potassium',
  'Praseodymium',
  'Promethium',
  'Protactinium',
  'Radium',
  'Radon',
  'Rhenium',
  'Rhodium',
  'Roentgenium',
  'Rubidium',
  'Ruthenium',
  'Rutherfordium',
  'Samarium',
  'Scandium',
  'Seaborgium',
  'Selenium',
  'Silicon',
  'Silver',
  'Sodium',
  'Strontium',
  'Sulfur',
  'Tantalum',
  'Technetium',
  'Tellurium',
  'Tennessine',
  'Terbium',
  'Thallium',
  'Thorium',
  'Thulium',
  'Tin',
  'Titanium',
  'Tungsten',
  'Uranium',
  'Vanadium',
  'Xenon',
  'Ytterbium',
  'Yttrium',
  'Zinc',
  'Zirconium',
]

const nouns = [
  'bugs',
  'helpers',
  'factories',
  'imports',
  'exports',
  'features',
  'prototypes',
  'doc strings',
  'whitespace',
  ...flowers,
  ...elements,
]

const rand = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getOne = (list) => {
  return list[rand(0, list.length - 1)]
}

const getMessage = (category) => {
  switch (category) {
    case 'colors':
      return getOne(colors)
    case 'flowers':
      return getOne(flowers)
    case 'elements':
      return getOne(elements)
    default:
      return `${getOne(verbs)} ${getOne(adjectives)} ${getOne(nouns)}`
  }
}

let count = parseInt(process.argv[2], 10)
const category = process.argv[3]

while (count--) {
  const message = getMessage(category)
  spawnSync('git', [
    'commit',
    '--allow-empty',
    '-m',
    message
  ])
}
