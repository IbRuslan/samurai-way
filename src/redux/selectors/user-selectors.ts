import {AppRootStateType} from "../redux-store";
import {createSelector} from "reselect";

export const userSelector = {
    getUser (state: AppRootStateType) {
        return state.users
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

export const getUser = createSelector(userSelector.getUser, (users) => {
  return users.items
})