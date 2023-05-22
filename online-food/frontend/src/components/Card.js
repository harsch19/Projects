import React from "react";

function Card(props) {

    let qnty = props.item.qnty;
    let name = props.item.name;
    let price = props.item.price;
    let bg = props.item.bg;
    let serves = props.item.serves;
    

    const style = {
        backgroundImage: `url(/img/${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: "no-repeat",
    }

    return(
        <div className="item" style={style}>
            <div className="details">
                {qnty} <br/>{serves}<br/><br/>Price:<br/>Rs {price}<br/>
                <button>Add to card</button>
            </div>
            <div className="title">{name}</div>
        </div>
    );
}

export default Card;