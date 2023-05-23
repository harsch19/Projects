const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "crud_db"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res)=> {
    const sqlSelect = "SELECT * FROM movie_reviews";
    db.query(sqlSelect, (err, result)=> {
        res.send(result);
    });
});

app.post("/api/insert", (req, res)=>{
    const movieName = req.body.movie_name;
    const movieReview = req.body.movie_review;
    const sqlInsert = "INSERT INTO movie_reviews (movie_name, movie_review) VALUES (?,?)";
    db.query(sqlInsert, [movieName, movieReview], (err, result)=>{
        console.log(err);
    });
    
});

app.post("/api/update", (req, res)=> {
    const movieName = req.body.movie_name;
    const newMovie = req.body.newMovieName;
    const newReview = req.body.newMovieReview;
    const sqlUpdate = "UPDATE movie_reviews SET movie_name=?, movie_review=? WHERE movie_name=?";
    db.query(sqlUpdate, [newMovie, newReview, movieName], (err, result)=> {
        console.log(err);
    });
})

app.post("/api/delete", (req, res)=> {
    const movieName = req.body.movie_name;
    const sqlDelete = "DELETE FROM movie_reviews WHERE movie_name=?";
    db.query(sqlDelete, [movieName], (err, result)=> {
        console.log(err);
    });
})

app.listen(3001, ()=>{
    console.log("running on port 3001");
});
