import React, { useEffect, useState} from "react";
import Card from "./Card";
import axios from 'axios';

function Main() {

    const[data, setData] = useState([]);

    useEffect(() => {
        // Make the HTTP request to the backend API
        axios.get('http://localhost:3001/api/data').then(response => {
            setData(response.data); // Set the retrieved data in the component state
        })
        .catch(error => {
            console.error('Error fetching data from the server', error);
        });
    }, []);

    const starts = data.slice(0,5).map(item=> {
        return(
            <Card
                item = {item}
            />
        );
    });

    const mains = data.slice(5,).map(item=> {
        return(
            <Card
                item = {item}
            />
        );
    })

    return(
        <div className="MainContainer">
            <div className="menu-title">
                <h3>MENU</h3>
                <p>STARTERS</p>
            </div>

            <div className="container-1">
                <div className="menu" id="starters">
                    {starts}
                </div>
            </div>

            <div>
                <p>MAIN COURSE</p>
            </div>
            <div className="container-2">
                <div className="menu" id="main-course">
                    {mains}
                </div>
            </div>
        </div>
    );
}

export default Main;