export default class AuthService {
    login(formData) {
        localStorage.setItem('authorized', JSON.stringify((!!formData.password)));

        return Promise.resolve(this.loggedIn());
    }

    logout() {
        localStorage.removeItem('authorized');
    }

    loggedIn() {
        return JSON.parse(localStorage.getItem('authorized'));
    }
}
