import pg from "pg";
import config from "../../config.js";

const pool = new pg.Pool(config.db);

console.log(config.db);
export default pool;
