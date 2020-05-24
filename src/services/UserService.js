export default class UserService {
    API_URL = 'http://localhost:4000/';

    findAll() {
        const endpoint = 'users';

        return fetch(`${this.API_URL}${endpoint}`)
            .then(response => response.json())
            .then(response => response);
    }

    search(query = '') {
        const endpoint = `users/?q=${query}`;

        return fetch(`${this.API_URL}${endpoint}`)
            .then(response => response.json())
            .then(response => response);
    }

    remove(id) {
        const endpoint = `users/${id}`;

        return fetch(`${this.API_URL}${endpoint}`, {method: 'DELETE'})
            .then(response => response.json())
            .then(response => response);
    }
}
