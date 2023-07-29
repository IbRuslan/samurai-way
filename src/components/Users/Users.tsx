import React from 'react';
import s from './users.module.css'
import {UsersType} from "../../redux/users-reducer";
import axios from "axios";

type UsersTypeProps = {
    users: Array<UsersType>
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
}

export const Users: React.FC<UsersTypeProps> = ({users, ...props}) => {

    if (users.length <= 1) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }

    return (
        <div className={s.container}>
            {
                users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.container_img}>
                            <img
                                src={u.photos.small ? u.photos.small : 'https://www.seekpng.com/png/detail/73-730482_existing-user-default-avatar.png'}
                                alt="ava"/>
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
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};