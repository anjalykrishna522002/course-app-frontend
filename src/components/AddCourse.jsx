import React, { useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios';

const AddCourse = () => {

    const [data, setData] = useState({
        coursetitle: "",
        coursedescription: "",
        date: "",
        duration: "",

        venue: "",
        trainername: ""

    })

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8082/add", data).then(
            (Response) => {
                console.log(Response.data)
                if (Response.data.status == "success") {
                    alert("Successfully Added")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error) => {
                alert.apply(error.message)
            }
        )

    }

    return (
        <div>
            <Navbar />

            <h1><center>COURSE</center></h1>

            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="employeeId" className="form-label">COURSE TITLE</label>
                                <input type="text" className="form-control" name='coursetitle' value={data.employeeId} onChange={inputHandler} />
                            </div>
                            <div className="col col-12">
                                <label htmlFor="address" className="form-label">COURSE DESCRIPTION</label>
                                <textarea className="form-control" name='coursedescription' value={data.coursedescription} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="" className="form-label">DATE</label>
                                <input type="date" className="form-control" name='date' value={data.date} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="mob" className="form-label">DURATION</label>
                                <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6">
                                <label htmlFor="mob" className="form-label">VENUE</label>
                                <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="email" className="form-label">TRIANER NAME</label>
                                <input type="text" className="form-control" name='trainername' value={data.tradername} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <button className="btn btn-success" onClick={readValue}>REGISTER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCourse