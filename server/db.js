let pg_client = null;

const { Client } = require("pg");

// PostgreSQL database credentials
const { POSTGRES_HOST, POSTGRES_USER, POSTGRES_PASS, POSTGRES_DB, SCHEMA, POSTGRES_SSL = false } =
  process.env;

const connectDatabase = async () => {
  try {
    pg_client = new Client({
      host: POSTGRES_HOST,
      user: POSTGRES_USER,
      password: POSTGRES_PASS,
      database: POSTGRES_DB,
      port: 5432,
      ssl: POSTGRES_SSL ? { 
        rejectUnauthorized: false 
      } : false
    });
    await pg_client.connect();
    console.log("Connected to PostgreSQL database");
    return pg_client;
  } catch (err) {
    console.error("Error connecting to PostgreSQL:", err);
    return pg_client;
  }
};

(async () => {
  await connectDatabase();
})();

module.exports = { pg_client };
