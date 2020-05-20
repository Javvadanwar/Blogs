const express = require("express");
const { Pool, Client } = require("pg");
const cors = require('cors')
const connectionstring = "postgres://postgres:postgres@localhost/Blogs";
const pool = new Pool({
  connectionString: connectionstring,
});
pool.connect();
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.get("/Blogs", (req, res, next) => {
    pool.query(`select * from Blogs
    `, (err, resp) => {
      if (err) {
        next(err);
        return;
      }
      res.send(resp.rows);
    });
  });

  app.post("/Blogs", (req, res, next) => {
    newRow = req.body;
    let elems = [newRow.title, newRow.des, newRow.paras];
    pool.query(
      "insert into Blogs (title,des,paras) values ($1,$2,$3) RETURNING *",
      elems,
      (err, result) => {
        if (err) {
          next(err);
        }
        res.status(201);
        res.send(newRow);
      }
    );
  });
app.listen("3002", () => console.log("listining on port 3002"));
 