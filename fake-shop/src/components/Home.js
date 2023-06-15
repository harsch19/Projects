import React from 'react';
import Parallax from './Parallax';
import Products from './Products';

const Home = () => {
    return (
        <>
            <Parallax />
            <div className="container px-0" style={{ marginTop: "66px" }}>
                <Products />
            </div>
        </>
    )
}

export default Home;