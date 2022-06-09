const systems = {
  metric: {
    oz: 'ml',
  },
  imperial: {
    ml: 'oz',
  },
};

const abbreviations = {
  each: 'ea',
  kilogram: 'kg',
  ounce: 'oz',
  ounces: 'oz',
  'fluid-ounce': 'fl-oz',
  pound: 'lb',
  pounds: 'lb',
  gram: 'g',
  milligram: 'mg',
  milligrams: 'mg',
  millilitre: 'ml',
  millilitres: 'ml',
  litre: 'l',
  litres: 'l',
  liter: 'l',
  liters: 'l',
  teaspoon: 'tsp',
  teaspoons: 'tsp',
  tablespoon: 'tbsp',
  tablespoons: 'tbsp',
  cup: 'cup',
  cups: 'cup',
  pint: 'pt',
  pints: 'pt',
  quart: 'qt',
  quarts: 'qt',
  gallon: 'gal',
  gallons: 'gal',
  millimetre: 'mm',
  millimetres: 'mm',
  centimetre: 'cm',
  centimetres: 'cm',
  metre: 'm',
  metres: 'm',
};

const conversionExcluded = ['each', 'dash'];

const abbr = (unit) => {
  return abbreviations[unit.toLowerCase()] || unit;
};

const switchSystem = ({ unit, system }) => {
  return systems[system][unit] || unit;
};

const isExcluded = (unit) => {
  return conversionExcluded.includes(unit);
};

const units = {
  systems,
  abbreviations,
  abbr,
  switchSystem,
  conversionExcluded,
  isExcluded,
};

export default units;
