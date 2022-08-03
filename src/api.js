import axios from "axios";

//posting the login data of the candidates
export function Postlogin(data){
    return axios.post(`http://localhost:3001/login`,data)
}

//posting the register data of the candidates
export function Postregister(data){
    return axios.post(`http://localhost:3001/register`,data)
}

//getting the details of candidates by email
export function GetuserbyEmail(id){
    return axios.get(`http://localhost:3001/user/${id}`)
}

//posting the login data of the recruiters
export function Postreclogin(data){
    return axios.post(`http://localhost:3001/reclogin`,data)
}

//posting the register data of the recruiters
export function Postrecregister(data){
    return axios.post(`http://localhost:3001/recregister`,data)
}

//getting the details of recruiter by email
export function GetrecruiterbyEmail(id){
    return axios.get(`http://localhost:3001/recruiter/${id}`)
}

//posting the job details by recruiter
export function Postcompany(data){
    return axios.post(`http://localhost:3001/company`,data, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}
//posting the job details by recruiter
export function Postupcomingcompany(data){
    return axios.post(`http://localhost:3001/upcomingcompany`,data, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//posting the job details of applied jobs
export function Postappliedjobs(data){
    return axios.post(`http://localhost:3001/apply`,data, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//posting the job details of applied jobs
export function Postinterestedjobs(data){
    return axios.post(`http://localhost:3001/interested`,data, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}





//getting the details of recruiter by id
export function GetrecruiterbyId(id){
    return axios.get(`http://localhost:3001/recruiters/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//getting the details of candidates by id
export function GetuserbyId(id){
    return axios.get(`http://localhost:3001/users/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//getting the details of job
export function Getjobs(){
    return axios.get(`http://localhost:3001/job`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}
export function Getupcomingjobs(){
    return axios.get(`http://localhost:3001/upcomingjob`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//getting the details of applied jobs of candidates by id
export function GetappliedjobId(id){
    return axios.get(`http://localhost:3001/appliedjob/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}
//getting the details of applied jobs of candidates by id
export function GetinterestedjobId(id){
    return axios.get(`http://localhost:3001/interestedjob/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//getting the details of candidates by email for recruiters
export function Getcandidatesdetailsbyemail(id){
    return axios.get(`http://localhost:3001/viewcandidates/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}

//getting the details of candidates by email for recruiters
export function Getinterestedcandidatesdetailsbyemail(id){
    return axios.get(`http://localhost:3001/viewinterestedcandidates/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}






////getting the job info by id
export function GetjobId(id){
    return axios.get(`http://localhost:3001/jobs/${id}`, {
        headers: {
            authorization: window.localStorage.getItem("app_token")
        }
    })
}