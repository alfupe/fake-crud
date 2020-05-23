import React, { useState } from 'react';
import { withAdminLayout } from '../../HOC/WithLayout';
import generateRandomUser from '../../../modules/generate-random-user/generate-random-user';

const UserDetailPage = props => {
    const [user, setUser] = useState({});

    const generateUser = event => {
        const user = generateRandomUser();
        setUser(user);
    };

    return (
        <section>
            user detail page
            <button onClick={generateUser}>generate User</button>
            {user?.avatar && <img src={user?.avatar} alt="Avatar" />}
            <pre>{JSON.stringify(user, null, 4)}</pre>
        </section>
    );
};

export default withAdminLayout(UserDetailPage);
