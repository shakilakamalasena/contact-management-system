import React from "react";
import Navbar from "../Navbar/Navbar";
import "./home.css";

const Home = () => {
    return (
        <>

        <Navbar />
            <div className="home">
                <h1 className="home-title">CONTACT MANAGEMENT SYSTEM</h1>
                <p className="home-description">
                    Start collecting your contacts in a very smart way. We
                    provide very efficient and smarter way to handle contacts.
                </p>
            </div>
        </>
    );
};

export default Home;
