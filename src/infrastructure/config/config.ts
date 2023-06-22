import "dotenv/config";

const config = {
  MONGO_URLCONNECTION: process.env.MONGO_URLCONNECTION,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MSG91_AUTHKEY: process.env.MSG91_AUTHKEY,

  PORT: process.env.PORT,
};

export default config;
