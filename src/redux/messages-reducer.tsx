export type MessagesUsers = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type MessagesPageType = {
    messagesUsers: MessagesUsers[]
    messagesData: MessagesType[]
    newMessagesText: string
}

const initialState: MessagesPageType = {
    messagesUsers: [
        {id: 1, name: 'Ruslan'},
        {id: 2, name: 'Sergey'},
        {id: 3, name: 'Sherzod'},
        {id: 4, name: 'Milana'},
        {id: 5, name: 'Miraziz'}
    ],
    messagesData: [
        {id: 1, message: 'He'},
        {id: 2, message: 'How are yo'},
        {id: 3, message: 'Yo'}
    ],
    newMessagesText: ''
}

type ActionMessagesType = addMessageActionType | updateNewMessagesActionType

export const messagesReducer = (state: MessagesPageType = initialState, action: ActionMessagesType): MessagesPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessages = {
                id: state.messagesData.length + 1,
                message: state.newMessagesText
            }
            return {...state, messagesData: [...state.messagesData, newMessages], newMessagesText: ''}
        case 'UPDATE-NEW-MESSAGES-TEXT':
            return {...state, newMessagesText: action.messagesText}
    }
    return state
}

export type addMessageActionType = ReturnType<typeof addMessageActionCreator>
export type updateNewMessagesActionType = ReturnType<typeof updateNewMessagesActionText>
export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'} as const)
export const updateNewMessagesActionText = (messagesText: string) =>
    ({type: 'UPDATE-NEW-MESSAGES-TEXT', messagesText: messagesText} as const)