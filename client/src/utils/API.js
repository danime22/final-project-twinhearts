import axios from "axios";


export default {

    userLogin: (user) => {

        return axios.post("/api/users/login", user);
    },



    onlineUsers: (userId) => {
        return axios.get("/api/users/onlineUsers/" + userId);
    },

    addFavorite: (userId, favId) => {
        return axios.post("/api/users/addFavorite", { userId: userId, favUserId: favId });
    },


    removeFavorite: (userId, favId) => {
        return axios.post("/api/users/removeFavorite", { userId: userId, favUserId: favId });
    },

    favoriteUsers: (userId) => {
        return axios.get("/api/users/favorites/" + userId)
    },


    getUsers: () => {
        return axios.get("/api/users");

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

    getMessages: (id) => {
        return axios.get("/api/messages/" + id);
    },

    getMessagesForUser: (userId) => {
        return axios.get("/api/messages/getMessagesForUser/" + userId);
    },

    addMessage: (data) => {
        return axios.post("/api/messages/addMessage", data);
    }
}