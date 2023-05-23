import React, {useState, useEffect} from "react";
import Axios from "axios";

function Movies() {
    const [movieList, setMovieList]= useState([]);

    useEffect(()=> {
        Axios.get('http://localhost:3001/api/get').then((response)=>{
            setMovieList(response.data);
        });
    }, [])

    return(
        <div className="movies">
            <div className="title">
                <h1 className="heading">Movie Name</h1>
                {movieList.map((val)=> {
                    return <h3>{val.movie_name}</h3>
                })}
            </div>
            <div className="title">
                <h1 className="heading">Review</h1>
                {movieList.map((val)=> {
                    return <h3>{val.movie_review}</h3>
                })}
            </div>
        </div>
    );
}

export default Movies;