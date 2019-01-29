import axios from "axios";
// const booksAPI = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
getUsers: () => {
    console.log("hello");
    return axios.get("/api/users");
    
},

search: query => {
    return axios.get(query);
},

saveUser: data => {
    console.log("saving: " + JSON.stringify(data));
    return axios.post("/api/users", data);
},

deleteUser: id => {
    return axios.delete("api/users", + id);
}
}