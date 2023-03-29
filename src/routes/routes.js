import express from "express";
import {
  insertTransaction,
  deleteTransactions,
  getTransactions,
} from "../controllers/history.js";
import { insertUser } from "../controllers/user.js";

const router = express.Router();

router.post("/app/user", insertUser);

router.get("/app/user/:uuid/transaction", getTransactions);
router.post("/app/user/:uuid/transaction", insertTransaction);
router.delete("/app/user/:uuid/transaction", deleteTransactions);

export default router;
