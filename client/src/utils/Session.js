class Session {
    save(key, item) {
        let str = JSON.stringify(item);
        localStorage.setItem(key, str);
    }

    get(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}

const session = new Session;

export default session;