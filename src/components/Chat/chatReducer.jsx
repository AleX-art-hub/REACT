export default function chatReducer(state, action){
    switch (action.type){
        case 'NEW_MESSAGE':{
            const {users, messages} = state;
            const {message} = action;
            const messageFromUser = {
                ...message,
                user: users.get(message.userId)
            };
            const newMessage = [...messages, messageFromUser];
            return {
                ...state,
                messages: newMessage,
            };
        }
        case 'GET_MESSAGE_SUCCESS': {
            const{
                data: {users, messages},
            } = action;
            const usersMap = new Map();
            users.forEach((u)=>{
                usersMap.set(u.id, u);
            });
            const messagesWithAuthors = message.map((u) => ({
                ...u,
                author: usersMap.get(u.userId) ?? null,
            }));
            return {
                ...state,
                users: usersMap,
                message: messagesWithAuthors,
            }
        }
        default: return state;
    }
}
