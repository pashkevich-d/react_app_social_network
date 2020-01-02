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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE:
            let newMessageText = action.newMessage;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: newMessageText}]
            }
        default: 
            return state;
    }
}

export const sendMessageCreator = (newMessage) => {
    return {
        type: SEND_MESSAGE, newMessage
    }
}

export default dialogsReducer;