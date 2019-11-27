const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMessageText;
            return state;
        case SEND_MESSAGE:
            let newMessageText = state.newMessage;
            state.messages.push({id: 6, message: newMessageText});
            state.newMessage = "";
            return state;
        default: 
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageCreator = (MessageBody) => {
    return {
        type: UPDATE_NEW_MESSAGE, newMessageText: MessageBody
    }
}

export default dialogsReducer;