const chalk = require('chalk');

function log(...args) {
  console.log(...args);
}

function print(color, ...args) {
  if (args.length > 1) {
    log(
      chalk[`bg${color.replace(/^\w/, (w) => w.toUpperCase())}`](` ${args[0]} `),
      chalk[color](args.slice(1))
    );
  } else {
    log(chalk[color](...args));
  }
}

log.info = print.bind(null, 'gray');
log.warn = print.bind(null, 'yellow');
log.error = print.bind(null, 'red');
log.success = print.bind(null, 'green');
log.chalk = chalk;

/**
 * 打印分割线
 * @param {'info' | 'warn' | 'success' | 'error'} level
 */
log.divider = (level = 'info') => {
  const logger = log[level] || log.info;
  logger('---------------------------------------------------------------------------------------');
};

module.exports = log;
