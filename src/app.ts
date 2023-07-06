import express, { Application } from "express";
import Server from "./server";
import { init } from "./infrastructure/database/mongo";
import config from "./infrastructure/config/config";

const main = async () => {
  const app: Application = express();

  const server = new Server(app);

  const data = await init(
    "mongodb+srv://TShop:TShop123@tshop.lodfvqo.mongodb.net/?retryWrites=true&w=majority"
  );

  server.listen();
};

main().catch(console.log);
