const generateRandomUser = require('../src/modules/generate-random-user/generate-random-user');

module.exports = function () {
    const users = new Array(50).fill(null).map(user => {
        return generateRandomUser();
    });

    return {
        users
    }
}
