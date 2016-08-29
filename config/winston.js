import winston from 'winston';
import fs from 'fs';

const logDir = 'logs';
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      json: true,
      colorize: true
    }),
    new (winston.transports.File)({ filename: 'logs/server.log', level: 'verbose' })

  ]
});

const clientLogger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      json: true,
      colorize: true
    }),
    new (winston.transports.File)({ filename: 'logs/client.log', level: 'silly' })

  ]
});

export default { logger, clientLogger };
