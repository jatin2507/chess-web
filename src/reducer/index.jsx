
import { socket } from "../utils/socket";
let initialValues = {
    userInfo: { isLoading: true },
    token: '',
    waiting: { isWaiting: false },
    fail: { error: false, msg: '' }
}
let userToken = localStorage.getItem('token')
let reducer = (state = initialValues, action) => {
    let event = action.type.split('@')[0]
    console.log('Event is comming',action)
    switch (event) {
        case 'auth:guest':
            return { ...state, token: action.payload.token };
        case 'auth:userInfo':
            return { ...state, userInfo: JSON.parse(JSON.stringify(action.payload)) };
        case 'playes:waiting':
            return { ...state, waiting: action.payload };
        case 'playes:fail':
            return { ...state, fail: action.payload }
        case 'req':
            socket.emit('Request', { event: action.type.split('@')[1], payload: { ...action.payload, token: userToken } })
            return state
        default:
            return state
    }
}

export default reducer;




