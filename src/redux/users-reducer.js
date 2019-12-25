import {usersAPI} from '../API/api';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [
        // {id: 1, photoURL: "https://langery.ru/upload/iblock/5cb/5cb2ae043187adcf7db4ea0b85d261c8.jpg", followed: true, fullName: "Dmitry", status: "I'm creator of this social network", location: { city: "Minsk", photoURL: "https://langery.ru/upload/iblock/5cb/5cb2ae043187adcf7db4ea0b85d261c8.jpg", country: "Belarus" }}, 
        // {id: 2, photoURL: "https://langery.ru/upload/iblock/5cb/5cb2ae043187adcf7db4ea0b85d261c8.jpg", followed: false, fullName: "Masha", status: "I'm just Masha", location: { city: "Gomel", country: "Belarus" }}, 
        // {id: 3, photoURL: "https://langery.ru/upload/iblock/5cb/5cb2ae043187adcf7db4ea0b85d261c8.jpg", followed: true, fullName: "Sveta", status: "I'm Masha's best friend", location: { city: "Kiev", country: "Ukraine" }}, 
        // {id: 4, photoURL: "https://langery.ru/upload/iblock/5cb/5cb2ae043187adcf7db4ea0b85d261c8.jpg", followed: false, fullName: "Kirill", status: "I'm like Dmitry but just Kirill", location: { city: "Vitebsk", country: "Belarus" }}
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [2,3]
}

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
            return { 
                ...state, 
                //users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return { 
                ...state, 
                //users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS: {
            return { ...state, users: action.users }
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return { ...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : [state.followingInProgress.filter(id => id !== action.userId)]}
        }

        default: 
            return state;
    }
};

export const acceptFollow = (userId) => ({ type: FOLLOW, userId})
export const acceptUnfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) =>({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (currentPage, pageSize) => {
    
    return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
                        
        usersAPI.follow(userId)
        .then(response => {
            if (response.data.resultCode === 0)
            dispatch(acceptFollow(userId));
            dispatch(toggleFollowingProgress(false, userId));
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
                        
        usersAPI.unfollow(userId)
        .then(response => {
            if (response.data.resultCode === 0)
            dispatch(acceptUnfollow(userId));
            dispatch(toggleFollowingProgress(false, userId));
        })
    }
}

export default usersReducer;