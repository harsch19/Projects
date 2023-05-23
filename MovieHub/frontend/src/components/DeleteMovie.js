import React, {useState, useEffect} from "react";
import Axios from 'axios';

function DeleteMovie() {
    const [movieName, SetName] = useState("");

    const submitReview=()=>{
        Axios.post("http://localhost:3001/api/delete", {
            movie_name : movieName, 
        }).then(()=>{
            alert("successfull insert");
        });
    }

    return(
        <div className="register">
            <h1>Delete movie</h1>
            <input className="inputBox" type="text" placeholder="Enter Movie Name"
                onChange={(e)=>SetName(e.target.value)}
            />
            <button className="button" onClick={submitReview} type="button">Submit</button>
        </div>
    );
}

export default DeleteMovie;