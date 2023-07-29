import React from 'react';
import s from './users.module.css'
import {UsersType} from "../../redux/users-reducer";

type UsersTypeProps = {
    users: Array<UsersType>
    totalCount: number
    pageSize: number
    currentPage: number
    follow: (id: number) => void
    unFollow: (id: number) => void
    currentPageChanged: (p: number) => void
    isFetching: boolean
}

export const Users = (props: UsersTypeProps) => {

    const pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i)
        }
    }

    return (
        <div className={s.container}>
            <div className={s.selects}>
                {
                    pages.map(p => <span onClick={() => props.currentPageChanged(p)} key={p}
                                         className={props.currentPage === p ? s.select : ''}>{p}</span>)
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
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
                    </div>
                )}
        </div>
    )
};