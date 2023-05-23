import React, {useState, useEffect} from "react";
import Axios from 'axios';

const AddMovies = ()=>{
    const [movieName, SetName] = useState("");
    const [movieReview, SetReview] = useState("");

    const submitReview=()=>{
        Axios.post("http://localhost:3001/api/insert", {
            movie_name : movieName, 
            movie_review : movieReview
        }).then(()=>{
            alert("successfull insert");
        });
    }

    return(
        <div className="register">
            <h1>Add movies</h1>
            <input className="inputBox" type="text" placeholder="Movie Name"
                onChange={(e)=>SetName(e.target.value)}    
            />
            <input className="inputBox" type="text" placeholder="Review"
                onChange={(e)=>SetReview(e.target.value)}
            />

            <button className="button" onClick={submitReview} type="button">Submit</button>
        </div>
    );
}

export default AddMovies;