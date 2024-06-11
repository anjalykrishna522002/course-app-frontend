import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewCourse = () => {
    const [data, changeData] = useState([])
    const fetchdata = () => {
        axios.get("http://localhost:8082/view").then((response) => {
            changeData(response.data)
            console.log(response.data)
        }).catch((error) => {
            alert(error.message)
        })
    }

    useEffect(
        () => { fetchdata() }, []
    )
    return (
        <div>
            <Navbar/>
            <div className="container">
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
                            {data.map(
                                (value, index) => {
                                    return <tbody>
                                        <tr>
                                            <th scope="row">{value.coursetitle}</th>
                                            <td>{value.coursedescription}</td>
                                            <td>{value. date}</td>
                                            <td>{value.duration}</td>

                                            <td>{value.venue}</td>
                                            <td>{value.trainername}</td>
                                    

                                        </tr>

                                    </tbody>
                                }
                            )}

                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewCourse