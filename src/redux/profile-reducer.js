import {
    usersAPI,
    profileAPI
} from "../API/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [{
            id: 1,
            message: "Мой первый пост",
            likesCount: 12
        },
        {
            id: 2,
            message: "А вот и мой второй пост",
            likesCount: 4
        }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                    newPostText: ''
            }
            case SET_USER_PROFILE:
                return {
                    ...state,
                    profile: action.profile
                }
                case SET_STATUS:
                    return {
                        ...state,
                        status: action.status
                    }
                    default:
                        return state;
    }
};

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}


export default profileReducer;