import React, { useState } from "react";
import './Student.css';
import { Link, useNavigate } from "react-router-dom";

const Students = () => {
    const [Data] = useState([
        {
            Name: "EA23",
            Age: 20,
            Course: "MERN",
            Batch: "March",
            // Change: "Edit"
        },
        {
            Name: "EA23",
            Age: 21,
            Course: "MERN",
            Batch: "March",
            // Change: "Edit"
        },
        {
            Name: "EA23",
            Age: 22,
            Course: "MERN",
            Batch: "March",
            // Change: "Edit"
        },
        {
            Name: "EA23",
            Age: 21,
            Course: "MERN",
            Batch: "March",
            // Change: "Edit"
        },
        {
            Name: "EA23",
            Age: 22,
            Course: "MERN",
            Batch: "March",
            // Change: "Edit"
        },
        {
            Name: "EA23",
            Age: 21,
            Course: "MERN",
            Batch: "March",
            // Change: "Edit"
        },
        {
            Name: "EA23",
            Age: 22,
            Course: "MERN",
            Batch: "March",
            // Change: "Edit"
        }
    ])

    const navigate = useNavigate()
    const addStudent = () => {
        navigate("/students/addStudent")
    }

    return (
        <div style={{ margin: "50px" }}>
            <div id="head">
                <h1>Students Details</h1>
                <button id="headBtn" onClick={addStudent}>Add new student</button>
            </div>
            <table id="tblStyle" cellPadding="15">
                <thead>
                    <tr style={{ lineHeight: "15px" }}>
                        <th style={{ textAlign: "left" }}>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td style={{ textAlign: "left" }}>{element.Name}</td>
                                    <td>{element.Age}</td>
                                    <td>{element.Course}</td>
                                    <td>{element.Batch}</td>
                                    <td><Link to=""> Edit </Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Students