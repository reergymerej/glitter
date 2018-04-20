#!/usr/bin/env node


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
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
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
]

const rand = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getOne = (list) => {
  return list[rand(0, list.length - 1)]
}

const getMessage = () => {
  return `${getOne(verbs)} ${getOne(adjectives)} ${getOne(nouns)}`
}

let count = parseInt(process.argv[2], 10)
while (count--) {
  const message = getMessage()
}

