import React from 'react';
import s from './users.module.css'
import {UsersType} from "../../redux/users-reducer";

type UsersTypeProps = {
    users: Array<UsersType>
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
}

export const Users: React.FC<UsersTypeProps> = ({users, ...props}) => {

    if (users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://klike.net/uploads/posts/2019-03/1551596732_15.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://klike.net/uploads/posts/2019-03/1551596770_39.jpg',
                followed: false,
                fullName: 'Evgeniy',
                status: 'I am a teacher',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://gagaru.club/uploads/posts/2023-02/1675951448_gagaru-club-p-krasivie-cherti-litsa-u-muzhchin-pinterest-33.jpg',
                followed: true,
                fullName: 'Sergey',
                status: 'I am a student',
                location: {city: 'Moscow', country: 'Russian'}
            }
        ])
    }

    return (
        <div className={s.container}>
            {
                users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.container_img}>
                            <img src={u.photoUrl} alt="ava"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unFollow(u.id)}>UnFollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};