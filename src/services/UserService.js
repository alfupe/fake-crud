export default class UserService {
    API_URL = 'http://localhost:4000/';

    findAll() {
        const endpoint = 'users?_sort=id&_order=desc';

        return fetch(`${this.API_URL}${endpoint}`)
            .then(response => response.json())
            .then(response => response);
    }

    search(query = '') {
        const endpoint = `users/?q=${query}&_sort=id&_order=desc`;

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

    create(formData) {
        const endpoint = 'users';
        const data = new URLSearchParams();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));

        return fetch(`${this.API_URL}${endpoint}`,
            {
                method: 'POST',
                body: data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then(response => response.json())
            .then(response => response);
    }

    update(id, formData) {
        const endpoint = `users/${id}`;
        const data = new URLSearchParams();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));

        return fetch(`${this.API_URL}${endpoint}`,
            {
                method: 'PUT',
                body: data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then(response => response.json())
            .then(response => response);
    }
}
