import React, { useState } from 'react'
import './AddStudent.css'

const AddStudent = () => {

    const [data, setData] = useState({
        Name: '',
        Age: '',
        Course: '',
        Batch: ''
    })


    const [student] = useState([])

    const clickHandle = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault()
        student.push(data)
        console.log(student)
        setData({ Name: '', Age: '', Course: '', Batch: '' })
    }

    return (
        <>
            <form onSubmit={submitForm}>

                <div className="inputBox">
                    <input type="text" autoComplete = "off" value={data.Name} name='Name' onChange={clickHandle} required />
                    <label htmlFor="Name">Name</label>
                </div>

                <div className="inputBox">
                    <input type="text" autoComplete = "off" value={data.Age} name='Age' onChange={clickHandle} required />
                    <label htmlFor="Age">Age</label>
                </div>

                <div className="inputBox">
                    <input type="text" autoComplete = "off" value={data.Course} name='Course' onChange={clickHandle} required />
                    <label htmlFor="Course">Course</label>
                </div>

                <div className="inputBox">
                    <input type="text" autoComplete = "off" value={data.Batch} name='Batch' onChange={clickHandle} required />
                    <label htmlFor="Batch">Batch</label>
                </div>

                <div className='btnStyle'>
                    <button style={{backgroundColor: 'gray'}}>Cancel</button>
                    <button type='submit'>Submit</button>
                </div>

            </form>
        </>
    )
}

export default AddStudent