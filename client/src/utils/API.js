import axios from "axios";


export default {

    userLogin: (user) => {
        // console.log("loged in");
        // return axios.post("/api/login");

        return axios.post("/api/users/login", user);
    },



    onlineUsers: (userId) => {
        return axios.get("/api/users/onlineUsers/" + userId);
    },

    addFavorite: (userId, favId) => {
        return axios.post("/api/users/addFavorite", {userId: userId, favUserId: favId}); 
    },


    removeFavorite: (userId, favId) => {
        return axios.post("/api/users/removeFavorite", {userId: userId, favUserId: favId}); 
    },

    favoriteUsers: (userId) => {
return axios.get("/api/users/favorites/" + userId)
    },


    getUsers: () => {
        return axios.get("/api/users");

    },

    search: params => {
        let URI = "";
        for (var property in params) {
            if (params.hasOwnProperty(property)) {
                 if (params[property] !== ""){
                     URI += property + "=" + params[property] + "&";
                 }
            }
        }
        let newURI = URI.substr(0, URI.length - 1);
        return axios.get(`/api/users/search?${newURI}`);
    },

    saveUser: data => {
        console.log("saving: " + JSON.stringify(data));
        return axios.post("/api/users", data);
    },

    deleteUser: id => {
        return axios.delete("api/users", + id);
    },

    createMessage: (data) => {
        return axios.post("/api/messages/", data);
    },

    getMessages: (userId) => {
        return axios.get("/api/messages/" + userId);
    },

    addMessage: (data) => {
        return axios.post("/api/messages/addMessage", data);
    }
}