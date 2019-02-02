import axios from "axios";
const APIKEY = "D7Y5N9EK5RKguIB4ZCmLrEaDAoMXBtjZKtrTHIdRtHkhnq80chEQP3gljW9ru0LW";

export default {

    userLogin: (user) => {
        // console.log("loged in");
        // return axios.post("/api/login");

        return axios.post("/api/users/login", user)
    },


    getUsers: () => {
        return axios.get("/api/users");

    },

    search: (zipcode, distance) => {

        return axios.get(`/api/users/search?zipcode=${zipcode}&distance=${distance}`);
    },

    saveUser: data => {
        console.log("saving: " + JSON.stringify(data));
        return axios.post("/api/users", data);
    },

    deleteUser: id => {
        return axios.delete("api/users", + id);
    }
}