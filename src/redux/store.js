import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profile: {
            posts: [
                {id: 1, message: "Мой первый пост", likesCount: 12}, 
                {id: 2, message: "А вот и мой второй пост", likesCount: 4}
            ],
            newPostText: 'random post'
        },
        messages: {
            messages: [
                {id: 1, message: "Hi!"}, 
                {id: 2, message: "How are you?"}, 
                {id: 3, message: "I am fine"}, 
                {id: 4, message: "Thanks"}, 
                {id: 5, message: "Great"}, 
                {id: 6, message: "See you"}
            ],
            dialogs: [
                {id: 1, name: "Julia"}, 
                {id: 2, name: "Dasha"}, 
                {id: 3, name: "Pasha"}, 
                {id: 4, name: "Seva"}, 
                {id: 5, name: "Valera"}, 
                {id: 6, name: "Yura"}
            ],
            newMessage: ""
        },
        sidebar: {}
    },
    _callSubscriber () {
        console.log('changed');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    
    // addPost () {
    //     let newPost = {
    //         id: 3,
    //         message: this._state.profile.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profile.posts.push(newPost);
    //     this._state.profile.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText (newText) {

    //    this._state.profile.newPostText = newText;
    //    this._callSubscriber();
    // },
    dispatch (action) {

        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messages = dialogsReducer(this._state.messages, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;



// if (action.type === ADD_POST) {
//     let newPost = {
//         id: 3,
//         message: this._state.profile.newPostText,
//         likesCount: 0
//     };
//     this._state.profile.posts.push(newPost);
//     this._state.profile.newPostText = '';
//     this._callSubscriber(this._state);
// } else if (action.type === UPDATE_NEW_POST_TEXT) {
//     this._state.profile.newPostText = action.newText;
//     this._callSubscriber();
// } else if (action.type === UPDATE_NEW_MESSAGE) {
//     this._state.messages.newMessage = action.newMessageText;
//     this._callSubscriber(this._state);
// } else if (action.type === SEND_MESSAGE) {
//     let newMessageText = this._state.messages.newMessage;
//     this._state.messages.newMessage = "";
//     this._state.messages.messages.push({id: 6, message: newMessageText});
//     this._callSubscriber(this._state);
// }