import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

const Profile = () => {
    const [userImage, setUserImage] = useState('');

    useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.results[0].picture.large;
            setUserImage(imageUrl);
        })
        .catch(error => console.log(error));
    }, []);

    return (
        <Image
        source={{ uri: userImage }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
        />
    );
};

export default Profile;
