export default class AuthService {
    login(password) {
        localStorage.setItem('authorized', JSON.stringify(password === '123'));

        return Promise.resolve(this.loggedIn());
    }

    logout() {
        localStorage.removeItem('authorized');
    }

    loggedIn() {
        return JSON.parse(localStorage.getItem('authorized'));
    }
}
