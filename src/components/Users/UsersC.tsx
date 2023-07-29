import React from 'react';
import s from './users.module.css'
import {UsersType} from "../../redux/users-reducer";
import axios from "axios";

export interface UsersTypeProps {
    users: Array<UsersType>
    totalCount: number
    pageSize: number
    currentPage: number
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
}

export class UsersC extends React.Component<UsersTypeProps> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    currentPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.container}>
                <div className={s.selects}>
                    {
                        pages.map(p => <span onClick={() => this.currentPageChanged(p)} key={p}
                                             className={this.props.currentPage === p ? s.select : ''}>{p}</span>)
                    }
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.container_img}>
                            <img
                                src={u.photos.small ? u.photos.small : 'https://www.seekpng.com/png/detail/73-730482_existing-user-default-avatar.png'}
                                alt="ava"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unFollow(u.id)}>UnFollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
                    )
                }
            </div>
        );
    }
}