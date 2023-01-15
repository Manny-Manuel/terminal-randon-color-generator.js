import chalk from 'chalk';
import randomColor from 'randomcolor';

//User prompt
const hue = process.argv[2];
const luminosity = process.argv[3];

const randColorRgb = Math.floor(Math.random() * 16777215).toString(16);
const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});
console.log(chalk.hex(randColorRgb).bold('###############################'));
console.log(chalk.hex(randColorRgb).bold('###############################'));
console.log(chalk.hex(randColorRgb).bold('###############################'));
console.log(chalk.hex(randColorRgb).bold(`#####                     #####`));
console.log(chalk.hex(randColorRgb).bold(`#####       ${color}       #####`));
console.log(chalk.hex(randColorRgb).bold('#####                     #####'));
console.log(chalk.hex(randColorRgb).bold('###############################'));
console.log(chalk.hex(randColorRgb).bold('###############################'));
console.log(chalk.hex(randColorRgb).bold('###############################'));
