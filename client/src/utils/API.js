import axios from "axios";
const booksAPI = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    getUsers: () => {
        console.log("API USERS");
        var x = axios.get("/api/users");
        console.log("GOT:   " + JSON.stringify(x));
        return x;
    },
    search: query => {
        const newQuery = query.replace(" ", "+");
        console.log("searching");
        return axios.get(booksAPI + newQuery);
    },
    saveUsers: data => {
        return axios.post("/api/users", data);
    },
    deleteUsers: id => {
        return axios.delete("/api/users/" + id);
    }
};