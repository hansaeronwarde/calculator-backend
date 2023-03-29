import app from "./src/app.js";
const port = 3000;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
