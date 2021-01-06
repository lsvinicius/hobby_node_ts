import "reflect-metadata";

import express from "express";

import { createConnection, Connection } from "typeorm";

const dbDevPath = __dirname + "/dev.db";
const entitiesPath = __dirname + "/entities/*.js";

console.log(dbDevPath);
console.log(entitiesPath);

createConnection({
  type: "sqlite",
  database: dbDevPath,
  entities: [entitiesPath],
  synchronize: true,
  logging: true,
})
  .then((connection: Connection): void => {
    // here you can start to work with your entities
    console.log("criei as tabelas");
  })
  .catch((error: Error): void => console.log(error));

const api = express();

api.get("/", (req: express.Request, res: express.Response): void => {
  console.log(typeof req);
  console.log(typeof res);
  res.send("oi");
});

api.listen(8080, (): void => {
  console.log("listening");
});
