
import { socket } from "../utils/socket";
let initialValues = {
    userInfo: { isLoading: true },
    token: '',
    fail: { error: false, msg: '' },
    popup: { show: false, title: '', content: '', type: '', route: '' },
    match: { isWaiting: true }
}
let reducer = (state = initialValues, action) => {
    let userToken = localStorage.getItem('token')
    let event = action.type.split('@')[0]
    switch (event) {
        case 'src:popup':
            return { ...state, popup: action.payload };
        case 'auth:token':
            return { ...state, token: action.payload.token };
        case 'info:userInfo':
            return { ...state, userInfo: action.payload };
        case 'match:found':
            return { ...state, match: action.payload }
        case 'fail':
            return { ...state, fail: { ...action.payload } }
        case 'req':
            socket.emit('Request', { event: action.type.split('@')[1], payload: { token: userToken, ...action.payload } })
            return state
        default:
            return state
    }
}

export default reducer;




