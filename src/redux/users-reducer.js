const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        // {id: 1, photoURL: "https://langery.ru/upload/iblock/5cb/5cb2ae043187adcf7db4ea0b85d261c8.jpg", followed: true, fullName: "Dmitry", status: "I'm creator of this social network", location: { city: "Minsk", photoURL: "https://langery.ru/upload/iblock/5cb/5cb2ae043187adcf7db4ea0b85d261c8.jpg", country: "Belarus" }}, 
        // {id: 2, photoURL: "https://langery.ru/upload/iblock/5cb/5cb2ae043187adcf7db4ea0b85d261c8.jpg", followed: false, fullName: "Masha", status: "I'm just Masha", location: { city: "Gomel", country: "Belarus" }}, 
        // {id: 3, photoURL: "https://langery.ru/upload/iblock/5cb/5cb2ae043187adcf7db4ea0b85d261c8.jpg", followed: true, fullName: "Sveta", status: "I'm Masha's best friend", location: { city: "Kiev", country: "Ukraine" }}, 
        // {id: 4, photoURL: "https://langery.ru/upload/iblock/5cb/5cb2ae043187adcf7db4ea0b85d261c8.jpg", followed: false, fullName: "Kirill", status: "I'm like Dmitry but just Kirill", location: { city: "Vitebsk", country: "Belarus" }}
    ]
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
            return { ...state, users: [...state.users, ...action.users] }
        }

        default: 
            return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId})
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;