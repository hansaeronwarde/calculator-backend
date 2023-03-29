import pool from "../services/db.js";

export const insertTransaction = async (req, res) => {
  const { calculation } = req.body;
  const { uuid } = req.params;

  try {
    const result = await pool.query(
      "INSERT INTO transaction (calculation, uuid, timestamp) VALUES ($1 $2 $3)",
      [calculation, uuid, Date.now()]
    );
    return res.status(200).send();
  } catch (err) {
    return res.status(400).send({ error: err });
  }
};

export const getTransactions = async (req, res) => {
  const { uuid } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM transaction WHERE user = $1 ORDER BY id ASC",
      [uuid]
    );
    return res.status(200).send(result);
  } catch (err) {
    return res.status(400).send({ error: err });
  }
};

export const deleteTransactions = async (req, res) => {
  const { uuid } = req.params;
  try {
    const result = await pool.query("DELETE FROM transaction WHERE user = $1", [
      uuid,
    ]);
    return res.status(200).send();
  } catch (err) {
    return res.status(400).send({ error: err });
  }
};
