import axios from "axios";


export default {

    userLogin: (user) => {
        // console.log("loged in");
        // return axios.post("/api/login");

        return axios.post("/api/users/login", user)
    },

    onlineUsers: (userId) => {
        return axios.get("/api/users/onlineUsers/" + userId);
    },

    addFavorite: (userId, favId) => {
        return axios.get("/api/users/addFavorite/" + userId + "/" + favId); 
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