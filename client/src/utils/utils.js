
import moment from 'moment';

export default {
    getAge: (birthday) => {
        let now = moment();
        let bday = moment(birthday, "YYYYMMDD");

        return now.diff(bday, "years", false);
    },

    getImage: (imageId) => {
        return window.location.protocol + "//" + window.location.hostname + ":" + (window.location.port == 3000 ? "3018" : window.location.port) + "/api/images/" + imageId;
    },

    getMessagePath: (userId) => {
        return "/messages/" + userId;
    }
}