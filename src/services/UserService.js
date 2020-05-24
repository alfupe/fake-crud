export default class UserService {
    API_URL = 'http://localhost:4000/';

    findAll() {
        const endpoint = 'users';

        return fetch(`${this.API_URL}${endpoint}`)
            .then(response => response.json())
            .then(response => response);
    }
}
