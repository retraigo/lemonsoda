/**
 * Under MIT license from https://github.com/retraigo/fortuna/
 */

export interface WeightedChoice<ItemType> {
  result: ItemType;
  chance: number;
}

/**
 * Roll one from an array of weighted choices.
 * @param {WeightedChoice[]} choices - Choices to roll from.
 * @returns {WeightedChoice} Item rolled.
 */

export default function weightedSelection<ItemType>(
  choices: WeightedChoice<ItemType>[],
): WeightedChoice<ItemType> {
  let total = 0;
  let i = 0;
  while (i < choices.length) {
    total += choices[i].chance;
    i += 1;
  }
  const result = Math.random() * total;
  let going = 0.0;
  i = 0;
  while (i < choices.length) {
    going += choices[i].chance;
    if (result < going) {
      return choices[i];
    }
    i += 1;
  }
  return choices[Math.floor(Math.random() * choices.length)];
}
