import pino from "pino";

const isProduction = process.env.NODE_ENV === "production";
const isServerless = Boolean(process.env.VERCEL);

const loggerOptions = {
  level: process.env.LOG_LEVEL ?? "info",
  redact: [
    "req.headers.authorization",
    "req.headers.cookie",
    "res.headers['set-cookie']",
  ],
};

export const logger = isServerless
  ? pino(loggerOptions, pino.destination({ sync: true }))
  : pino({
      ...loggerOptions,
      ...(isProduction
        ? {}
        : {
            transport: {
              target: "pino-pretty",
              options: { colorize: true },
            },
          }),
    });
