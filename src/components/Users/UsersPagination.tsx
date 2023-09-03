import React, {useEffect, useState} from 'react';
import s from './users.module.css'
import userPhoto from '../../img/avatar/userPhoto.png'
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersTypeProps = {
    users: Array<UsersType>
    totalCount: number
    pageSize: number
    currentPage: number
    follow: (id: number) => any
    unFollow: (id: number) => any
    currentPageChanged: (p: number) => void
    isFetching: boolean
    InProgress: number[]
}

export const UsersPagination = (props: UsersTypeProps) => {


    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const totalPages = Math.ceil(props.totalCount / props.pageSize);
        setTotalPages(totalPages);
    }, [props.totalCount, props.pageSize]);

    const onClickUnFollowHandler = (id: number) => {
        props.unFollow(id)
    }
    const onClickFollowHandler = (id: number) => {
        props.follow(id)
    }

    const renderPagination = () => {
        const pages = [];
        const currentPage = props.currentPage;
        const maxVisiblePages = 5;
        const ellipsis = "...";

        // Рассчитываем начальную и конечную страницу для отображения
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        // Если количество страниц меньше, чем максимально отображаемое количество,
        // корректируем начальную и конечную страницу
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        // Всегда добавляем первую и последнюю страницы
        if (startPage > 1) {
            pages.push(1);
            if (startPage > 1) {
                pages.push(ellipsis);
            }
        }

        // Добавляем страницы в массив
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push(ellipsis);
            }
            pages.push(totalPages);
        }

        const onClickHandler = (p: number | string) => {
            if (typeof p === "number") {
                props.currentPageChanged(p)
            }
            return
        }

        return (
            <div className={s.selects}>
                {pages.map(p =>
                    p === ellipsis ?
                        <span key={p} className={s.ellipsis}>{ellipsis}</span>
                        :
                        <span onClick={() => onClickHandler(p)} key={p} className={`${s.pages} ${props.currentPage === p ? s.select : ''}`}>{p}</span>
                )}
            </div>
        );
    };

    return (
        <div className={s.container}>
            {renderPagination()}
            {props.users.map(u =>
                <div key={u.id} className={s.users}>
                    <span>
                        <div className={s.container_img}>
                            <NavLink to={'profile/' + u.id}>
                                <img
                                    src={u.photos.small ? u.photos.small : userPhoto}
                                    alt="ava"
                                />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button
                                    disabled={props.InProgress.some(id => id === u.id)}
                                    onClick={() => onClickUnFollowHandler(u.id)}
                                >
                                    UnFollow
                                </button>
                                : <button
                                    disabled={props.InProgress.some(id => id === u.id)}
                                    onClick={() => onClickFollowHandler(u.id)}
                                >
                                    Follow
                                </button>
                            }
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </div>
            )}
        </div>
    );
};