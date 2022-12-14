import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { GetinterestedjobId, GetuserbyId } from "./api";
function Interested(props) {

    let [userData,setuserData]=useState([]);

    useEffect(async () => {
        //getting the details of candidates by their id
        let users = await GetuserbyId(props.match.params.id);
        let userEmail=users.data.email;
        //getting the data of applied jobs by user email
        let interestedjob=await GetinterestedjobId(userEmail)
        setuserData(interestedjob.data)
    }, [])

    return (
        <>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Job Posted On</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">About</th>
                    </tr>
                </thead>
                <tbody>
                {
                        userData.map((use, index) => {
                            return (
                                <tr>
                                    <th scope="row">{use.date}</th>
                                    <td>{use.companyname}</td>
                                    <td>{use.about}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default withRouter(Interested);