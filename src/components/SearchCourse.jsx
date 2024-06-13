import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const SearchCourse = () => {
    const [data, setData] = useState(
        {
            "coursetitle": ""
        }
    )
    const [result, setResult] = useState(
        []
    )
    //delete event handling
    const deleteCourse=(id)=>{
        let input={"_id": id }
        axios.post("http://localhost:8082/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status== "success") {
                 alert("successfully deleted")   
                } else {
                    alert("error in deletion")
                }
            }
        ).catch().finally()

    }
    //value fetching
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    } 
    //search button event
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8082/search", data).then(
            (response) => {
                setResult(response.data)
            }
        ).catch((error) => {
            console.log(error)
        }).finally()
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Search Title</label>
                                <input type="text" className="form-control" name="coursetitle" value={data.coursetitle} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-info " onClick={readValue}>Search</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">COURSE TITLE</th>
                                            <th scope="col">COURSE DESCRIPTION</th>
                                            <th scope="col">DATE</th>
                                            <th scope="col">DURATION</th>

                                            <th scope="col">VENUE</th>
                                            <th scope="col">TRAINER NAME</th>



                                        </tr>
                                    </thead>
                                    {result.map(
                                        (value, index) => {
                                            return <tbody>
                                                <tr>
                                                    <th scope="row">{value.coursetitle}</th>
                                                    <td>{value.coursedescription}</td>
                                                    <td>{value.date}</td>
                                                    <td>{value.duration}</td>

                                                    <td>{value.venue}</td>
                                                    <td>{value.trainername}</td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>Delete</button>
                                                    </td>


                                                </tr>

                                            </tbody>
                                        }
                                    )}

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchCourse