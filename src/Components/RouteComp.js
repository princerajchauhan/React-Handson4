import React from "react";
import Home from "./Home";
import Students from "./Students";
import Contact from "./Contact";
import LinkComp from "./LinkComp";
import AddStudent from "./AddStudent";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

function RouteComp() {
    return (
        <>
            <Router>
                <LinkComp />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/students/addStudent" element={<AddStudent />} />
                </Routes>
            </Router>
        </>
    )
}

export default RouteComp