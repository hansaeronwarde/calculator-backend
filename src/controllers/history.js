import pool from "../services/db.js";

export const insertTransaction = async (req, res) => {
  const { calculation } = req.body;
  const { uuid } = req.params;
  const now = new Date();

  try {
    const result = await pool.query(
      `INSERT INTO public.transaction(calculation, "user", "timestamp") VALUES ($1, $2, $3)`,
      [calculation, uuid, now]
    );
    return res.status(200).send();
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

export const getTransactions = async (req, res) => {
  const { uuid } = req.params;
  try {
    const result = await pool.query(
      `SELECT * FROM public.transaction WHERE "user" = $1 ORDER BY id ASC`,
      [uuid]
    );
    return res.status(200).send(result.rows);
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

export const deleteTransactions = async (req, res) => {
  const { uuid } = req.params;
  try {
    const result = await pool.query(
      `DELETE FROM public.transaction WHERE "user" = $1`,
      [uuid]
    );
    return res.status(200).send();
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};
