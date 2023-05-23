import React, {useState, useEffect} from "react";
import Axios from 'axios';

function UpdateMovie() {
    const [movieName, SetName] = useState("");
    const [newName, SetNewName] = useState("");
    const [newReview, SetNewReview] = useState("");

    const submitReview=()=>{
        Axios.post("http://localhost:3001/api/update", {
            movie_name : movieName, 
            newMovieName : newName,
            newMovieReview : newReview
        }).then(()=>{
            alert("successfull insert");
        });
    }

    return(
        <div className="register">
            <h1>Update movie</h1>
            <input className="inputBox" type="text" placeholder="Enter Movie Name"
                onChange={(e)=>SetName(e.target.value)}    
            />
            <input className="inputBox" type="text" placeholder="New Name"
                onChange={(e)=>SetNewName(e.target.value)}
            />
            <input className="inputBox" type="text" placeholder="New Review"
                onChange={(e)=>SetNewReview(e.target.value)}
            />

            <button className="button" onClick={submitReview} type="button">Submit</button>
        </div>
    );
}

export default UpdateMovie;