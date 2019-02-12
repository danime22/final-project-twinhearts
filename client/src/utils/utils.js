
import moment from 'moment';

export default {
    getAge: (birthday) => {
        let now = moment();
        let bday = moment(birthday, "YYYYMMDD");

        return now.diff(bday, "years", false);
    },

    getImage: (imageId) => {
        return window.location.protocol + "//" + window.location.hostname + ":" + (process.env.PORT || "3018") + "/api/images/" + imageId;
    },

    getMessagePath: (userId) => {
        return "/messages/" + userId;
    }
}