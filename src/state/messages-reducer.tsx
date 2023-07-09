import {ActionType, MessagesPageType} from "./state";

export const messagesReducer = (state: MessagesPageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessages = {
                id: state.messagesData.length + 1,
                message: state.newMessagesText
            }
            state.messagesData.push(newMessages)
            state.newMessagesText = ''
            break;
        case 'UPDATE-NEW-MESSAGES-TEXT':
            state.newMessagesText = action.messagesText;
            break;
    }
    return state
}

export type addMessageActionType = ReturnType<typeof addMessageActionCreator>
export type updateNewMessagesActionType = ReturnType<typeof updateNewMessagesActionText>
export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'} as const)
export const updateNewMessagesActionText = (messagesText: string) =>
    ({type: 'UPDATE-NEW-MESSAGES-TEXT', messagesText: messagesText} as const)