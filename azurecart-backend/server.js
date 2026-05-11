const express = require("express");
const cors = require("cors");
const sql = require("mssql");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: false
  }
};

app.get("/", (req, res) => {

  res.send("AzureCart Backend Running");

});

app.get("/products", async (req, res) => {

  try {

    await sql.connect(dbConfig);

    const result = await sql.query(
      "SELECT * FROM Products"
    );

    res.json(result.recordset);

  } catch (error) {

    console.log(error);

    res.status(500).send("Database Error");

  }

});

const PORT = 5000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});