import winston from "winston";

const customLevelOpt = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        debug: 4
    },
    colors: {
        fatal: 'red',
        error: 'red',
        warning: 'yellow',
        info: 'blue',
        debug: 'blue'
    }
}

const logger = winston.createLogger({
    levels: customLevelOpt.levels, //Defino que los levels del logger sean los propios
    //Defino los transportes que va a contener mi logger (no definido, no utilizable)
    transports: [

        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize({ colors: customLevelOpt.colors }),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            level: 'fatal',
            filename: './errors.log',
            format: winston.format.combine(
                winston.format.colorize({ colors: customLevelOpt.colors }),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            level: 'error',
            filename: './errors.log',
            format: winston.format.combine(
                winston.format.colorize({ colors: customLevelOpt.colors }),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            level: 'warning',
            filename: './errors.log',
            format: winston.format.combine(
                winston.format.colorize({ colors: customLevelOpt.colors }),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            level: 'debug',
            filename: './debug.log',
            format: winston.format.combine(
                winston.format.colorize({ colors: customLevelOpt.colors }),
                winston.format.simple()
            )
        }),
    ]
})

export const addLogger = (req, res, next) => {
    req.logger = logger //Poder utilizar el logger definido previamente
    req.logger.info(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()} `)
    next()
}

