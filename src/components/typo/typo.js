const qwertyKeyboardArray = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
  ['', '', ' ', ' ', ' ', ' ', ' ', '', ''],
]

const qwertyShiftedKeyboardArray = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+'],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'],
  ['', '', ' ', ' ', ' ', ' ', ' ', '', ''],
]

const findTypo = char => {
  const line = [...qwertyKeyboardArray, ...qwertyShiftedKeyboardArray].find(
    line => line.includes(char)
  )
  const index = line.findIndex(i => i === char)
  const neighbors = [line[index - 1], line[index + 1]].filter(
    s => typeof s === 'string'
  )
  const r = Math.floor(Math.random() * neighbors.length)
  return neighbors[r]
}

const replaceAt = (string, index, replacement) =>
  `${string.substr(0, index)}${replacement}${string.substr(
    index + replacement.length
  )}`

const getTypo = string => {
  const r = Math.floor(Math.random() * string.length)
  const typoString = replaceAt(string, r, findTypo(string[r]))
  const substring = typoString.substring(0, r + 1)
  return substring
}

export default getTypo
