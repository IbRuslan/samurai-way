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
}

export type ActionMessagesType = addMessageActionType

export const messagesReducer = (state: MessagesPageType = initialState, action: ActionMessagesType): MessagesPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessages = {
                id: state.messagesData.length + 1,
                message: action.newMessagesText
            }
            return {...state, messagesData: [...state.messagesData, newMessages]}
    }
    return state
}

export type addMessageActionType = ReturnType<typeof addMessageActionCreator>
export const addMessageActionCreator = (newMessagesText: string) => ({type: 'ADD-MESSAGE', newMessagesText} as const)