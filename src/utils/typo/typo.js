const qwertyKeyboard = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  [' ', ' ']
]

const qwertyShiftedKeyboard = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  [' ', ' ']
]

const findTypo = char => {
  const line = [...qwertyKeyboard, ...qwertyShiftedKeyboard].find(line =>
    line.includes(char)
  )
  const index = line.findIndex(i => i === char)
  const neighbors = [line[index - 1], line[index + 1]].filter(
    s => typeof s === 'string'
  )
  const r = Math.floor(Math.random() * neighbors.length)
  return neighbors[r]
}

export const replaceAt = (string, index, replacement) =>
  `${string.substr(0, index)}${replacement}${string.substr(
    index + replacement.length
  )}`

export const typo = string => {
  const r = Math.max(3, Math.floor(Math.random() * string.length))
  const typoString = replaceAt(string, r, findTypo(string[r]))
  const substring = typoString.substring(0, r + 1)
  return substring
}
