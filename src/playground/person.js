
export const isAdult = (age) => (age >= 21 ) ? 'You are an adult' : 'You are not an adult';

export const canDrink = (age) => (age >= 18 ) ? 'You can drink' : 'You cant drink';

const isSenior = (age) => (age >= 65 ) ? 'You are a senior' : 'You are not a senior';

export default isSenior;
