import React, {useState} from "react";
import starters from "./data/starters";
import mainCourse from "./data/mainCourse";
import Card from "./Card";

function Main() {

    const starts = starters.map(item=> {
        return(
            <Card
                item = {item}
            />
        );
    });

    const mains = mainCourse.map(item=> {
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