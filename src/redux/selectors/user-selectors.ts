import {AppRootStateType} from "../redux-store";

export const userSelector = {
    getUser (state: AppRootStateType) {
        return state.users.items
    },
    getPageSize (state: AppRootStateType) {
        return state.users.pageSize
    },
    getTotalUserCount (state: AppRootStateType){
        return state.users.totalCount
    },
    getCurrentPage (state: AppRootStateType) {
        return state.users.currentPage
    },
    getIsFetching (state: AppRootStateType) {
        return state.users.isFetching
    },
    getInProgress (state: AppRootStateType)  {
        return state.users.followingInProgress
    }
}

