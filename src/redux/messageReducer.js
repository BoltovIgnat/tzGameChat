const initialStore = {
    messageUsers: [
        {
            id: "3ecff39d-1df9-4fda-bb07-17035fbe62b1",
            from: "chat_bot",
            text: "repellat delectus aut qui unde tenetur",
            createdAt: "2022-03-15T05:38:22.439Z"
        },
        {
            id: "a1349eba-98c4-491c-be20-f330889465fb",
            from: "chat_bot",
            text: "dolore tenetur pariatur illum tempora magni",
            createdAt: "2022-03-15T05:37:52.390Z"
        }
    ],
    message: [{
        text: "Hello people",
        createdAt: "2022-03-15T05:37:52.390Z"
    }],

}


export const messageReducer = (store = initialStore, action) => {
    switch (action.type) {
        case 'ALL_MESSAGE':
            return { ...store }
        case 'CREATE_MESSAGE':
            console.log('action.payload', action.payload);
            let newStoreMessage = store.message.slice();
            newStoreMessage.push(action.payload)
            return { ...store, message: newStoreMessage }
        default: return store
    }
}