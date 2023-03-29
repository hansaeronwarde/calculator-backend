import { v4 } from "uuid";
import pool from "../services/db.js";

export const insertUser = async (req, res) => {
  const { os } = req.body;

  const uuid = v4();
  if (os !== "android" && os !== "ios") {
    return res.status(400).send({ error: "Invalid os value" });
  }
  console.log(uuid, os);
  try {
    const result = await pool.query(
      `INSERT INTO public."user" (uuid, os) VALUES ($1 $2)`,
      [uuid, os]
    );
    return res.status(201).send({
      user: {
        uuid: uuid,
      },
    });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
};
