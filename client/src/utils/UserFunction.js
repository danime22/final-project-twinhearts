import axios from "axios";

export const login = user => {

    return axios
    .post("users/login", {
        email: user.email,
        password: user.password
    })
    .then(res => {
       localStorage.setItem("usertoken", res.data)
       return res.data 
    })
    .catch(err => {
        console.log(err)
    })
}

